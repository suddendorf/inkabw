
import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
import { ToggleCollapse } from '../toggle-collapse';

import { AbwProjektDetail } from '../abw-projekt-detail';
import { ProjektdetailService } from '../projektdetail.service';

import { LiegenschaftRumpf } from "../liegenschaft-rumpf";
import { DataService } from '../data.service';
import { WE } from '../we';
import { Store } from '../store/store';

import { Actions } from '../store/actions';

@Component({
  selector: 'app-inka-lak-b',
  providers: [ProjektdetailService,DataService],
  templateUrl: './inka-lak-b.component.html',
  styleUrls: ['./inka-lak-b.component.css']
})
export class InkaLakBComponent extends ToggleCollapse implements OnInit {
  private projekt: AbwProjektDetail = new AbwProjektDetail();
  private message: Message;
  private liegenschaftId: string;
  primaer: string; //sek
  lieg: Array<{ id: string, title: string, weNrBw: string, weNrBima: string, bezeichnung: string }> = new Array(); //sek
  neueLiegenschaft: string;//sek

  constructor(private route: ActivatedRoute, private router: Router, private service: ProjektdetailService, private dataService: DataService,@Inject(Store) private  store: Store) {
    super();
    this.projekt.phase = 'LAK B';
    this.route.params.subscribe(params => {
      this.get(params['projektId'], params['liegenschaftId']);
    });
  }

  ngOnInit() {

  }


  isLand(): boolean {
    return sessionStorage.getItem("userGroup") == "32";
  }

  isFFE(): boolean {
    return sessionStorage.getItem("userGroup") == "33"
  }

  private get(projektId: string, liegenschaftId: string) {
    this.message = new Message();
    console.log('Projekt:' + projektId);
    // beim neu Anlegen wird die ID auf 'B' gesetzt, um dem Server mitzuteilen, dass ein Projekt der Phases LAK B angelegt werden soll.
    // der Server ermittelt die möglichen Kostenarten und schickt diese zurück
    if (!projektId) {
      projektId = 'B';

    }
    this.liegenschaftId = liegenschaftId;
    this.service.read(projektId, liegenschaftId)
      .subscribe(
      p => this.readSekLgs(p), //sek,
      error => this.message.fehler = <any>error);
    //sek
    if (this.lieg.length == 0) {
      let we: WE = new WE();
      we.abwasserspezifischeInfos = true;
      this.dataService.searchWE(we)
        .subscribe(
        l => this.assign(l),
        error => this.message.fehler = <any>error);
    }
  }
  //sek
  assign(l: WE[]) {
    this.lieg = new Array();
    for (let i of l) {
      //let bez: string = i.bezeichnung + "(Bw:" + i.weNrBw + "; BImA:" + i.weNrBima + ")";
      // let re = / /gi;
      let bez = i.bezeichnung;//.replace(re, "_");
      this.lieg.push({ id: i.liegenschaftId, title: bez, weNrBw: i.weNrBw, weNrBima: i.weNrBima, bezeichnung: i.bezeichnung });
    }
  }//sek
  addLiegenschaft() {
    // Workaround fuer Bug in IE10
    let ele: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("neueLiegenschaft");
    this.neueLiegenschaft = ele.value;
    // Ende Workaround
    if (!this.neueLiegenschaft) {
      this.fehler("Bitte wählen Sie eine Liegenschaft aus.");
      return;
    }
    for (let l of this.lieg) {
      console.log(l.title);
      console.log(this.neueLiegenschaft);
      if (this.neueLiegenschaft == l.title) {
        let sek: LiegenschaftRumpf = new LiegenschaftRumpf();
        sek.liegenschaftid = l.id;
        sek.rang = 2;
        sek.sdmwenr = l.weNrBw;
        sek.bimawenr = l.weNrBima;
        sek.bezeichnung = l.bezeichnung;
        for (let sekAlt of this.projekt.liegenschaften) {
          if (sekAlt.liegenschaftid == sek.liegenschaftid) {
            this.fehler("Die Liegenschaft ist bereits zugeordnert.");
            return;
          }
        }
        this.projekt.liegenschaften.push(sek);
        this.neueLiegenschaft = null;
        return;
      }
    }
    this.fehler(this.neueLiegenschaft + " nicht gefunden. Bitte wählen Sie eine Liegenschaft aus der Liste aus.");

  }
  //sek
  readSekLgs(p: AbwProjektDetail) {
    this.projekt = p;
    for (let l of p.liegenschaften) {
      if (l.rang == 1) {
        this.primaer = l.liegenschaftid;
      }
      console.log("Sekundäre Liegenschaft:" + l.liegenschaftid + ":" + l.rang);
    }
  }
  //sek
  checkPrimaer(l: LiegenschaftRumpf): boolean {
    let ok: boolean = this.primaer == l.liegenschaftid;
    return ok;
  }

  update(p: AbwProjektDetail) {
    this.message = new Message();
    if (p != null) {
      if (!p.projektNr) {
        this.message.fehler = 'Die Projekt Nummer darf nicht leer sein';
        return;
      }
       if (p.status == 'Altdaten') {
        this.message.fehler = 'Der Status Altdaten ist bei der Datensatzänderung nicht erlaubt.';
        return;
      }
      //sek
      for (let l of p.liegenschaften) {
        if (l.liegenschaftid == this.primaer) {
          l.rang = 1;
        } else {
          l.rang = 2;
        }
      }
      console.log(JSON.stringify(p));
      this.service.update(p)
        .subscribe(
        message => this.message = message,
        error => this.fehler(error)
        )
    }
  }
  fehler(error: any) {
    this.message.fehler = <any>error;
    console.log(this.message.fehler);
  }
  delete(p: AbwProjektDetail) {
    this.message = new Message();
    if (p != null) {
      console.log(JSON.stringify(p));
      this.service.delete(p.projektId)
        .subscribe(
        abw => this.projekt = abw,
        error => this.message = <any>error);
      this.router.navigate(['/inka-we', this.liegenschaftId]);
    }
  }
  //sek
  deleteLiegenschaft(l: LiegenschaftRumpf) {
    this.projekt.liegenschaften = this.projekt.liegenschaften.filter(obj => obj !== l);

  }
  
 navigate(u: LiegenschaftRumpf) {
    sessionStorage.setItem('title', u.bezeichnung + " (Bw:" + u.sdmwenr + "; BImA:" + u.bimawenr + ")");
    sessionStorage.setItem('liegenschaftId', u.liegenschaftid);
        this.store.dispatch(Actions.setTitle(u.bezeichnung));
    this.store.dispatch(Actions.setLgId(u.liegenschaftid));
 
    this.router.navigate(['/inka-we', u.liegenschaftid]);
  }
  get beginn(): string {
    return this.toDate(this.projekt.beginn);
  }
  get ende(): string {
    return this.toDate(this.projekt.ende);
  }
}

