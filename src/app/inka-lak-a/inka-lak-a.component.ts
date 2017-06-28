import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
import { ToggleCollapse } from '../toggle-collapse';
import { AbwProjektDetail } from '../abw-projekt-detail';

import { LiegenschaftRumpf } from "../liegenschaft-rumpf";
import { ProjektdetailService } from '../projektdetail.service';
import { DataService } from '../data.service';
import { WE } from '../we';

@Component({
  selector: 'app-inka-lak-a',
  providers: [ProjektdetailService, DataService],//sek
  templateUrl: './inka-lak-a.component.html',
  styleUrls: ['./inka-lak-a.component.css']
})
export class InkaLakAComponent extends ToggleCollapse implements OnInit {
  projekt: AbwProjektDetail = new AbwProjektDetail();
  private liegenschaftId: string; // id der primaeren Lg
  message: Message;
  primaer: string; //sek
  lieg: Array<{ id: string, title: string, weNrBw: string, weNrBima: string, bezeichnung: string }> = new Array(); //sek
  neueLiegenschaft: string;//sek
  summeKosten: number = 0;
  constructor(private route: ActivatedRoute, private router: Router, private service: ProjektdetailService, private dataService: DataService) {//sek
    super();
    this.projekt.phase = 'LAK A';
    this.route.params.subscribe(params => {
      this.get(params['projektId'], params['liegenschaftId']);
    });
  }

  ngOnInit() {

    let c: string = localStorage.getItem('collapsed');


  }


  isLand(): boolean {
    return sessionStorage.getItem("userGroup") == "32";
  }

  isFFE(): boolean {
    return sessionStorage.getItem("userGroup") == "33"
  }

  read() {
    if (this.projekt.projektId) {
      this.get(this.projekt.projektId, this.liegenschaftId);
    }
  }

  private get(projektId: string, liegenschaftId: string) {
    this.message = new Message();
    console.log('Projekt:' + projektId);
    // beim neu Anlegen wird die ID auf 'A' gesetzt, um dem Server mitzuteilen, dass ein Projekt der Phases LAK A angelegt werden soll.
    // der Server ermittelt die möglichen Kostenarten und schickt diese zurück
    if (!projektId) {
      projektId = 'A';

    }
    this.liegenschaftId = liegenschaftId;
    this.service.read(projektId, liegenschaftId)
      .subscribe(
      p => this.readSekLgs(p), //sek
      error => this.message.fehler = <any>error);
    //sek
    if (!this.lieg || this.lieg.length == 0) {
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
    this.summe();
  }

  summe() {
    this.summeKosten = 0;
    for (let k of this.projekt.kosten) {
      this.summeKosten += k.kosten;
    }
    console.log("kosten:" + this.summeKosten);
  }
  deleteLiegenschaft(l: LiegenschaftRumpf) {
    this.projekt.liegenschaften = this.projekt.liegenschaften.filter(obj => obj !== l);

  }
  //sek
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
  readSekLgs(p: AbwProjektDetail) {
    this.projekt = p;
    for (let l of p.liegenschaften) {
      if (l.rang == 1) {
        this.primaer = l.liegenschaftid;
      }
      console.log("Sekundäre Liegenschaft:" + l.liegenschaftid + ":" + l.rang);
    }
  }
  checkPrimaer(l: LiegenschaftRumpf): boolean {
    let ok: boolean = this.primaer == l.liegenschaftid;
    return ok;
  }
  update(p: AbwProjektDetail) {
    this.summe();
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
      console.log(JSON.stringify(p.kosten));
      //sek
      for (let l of p.liegenschaften) {
        if (l.liegenschaftid == this.primaer) {
          l.rang = 1;
        } else {
          l.rang = 2;
        }
      }
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
    /* let test = confirm("Löschen?");
     console.log(test);
     if (test == true) {
      */
    this.message = new Message();
    if (p != null) {
      console.log(JSON.stringify(p));
      this.service.delete(p.projektId)
        .subscribe(
        message => this.message = message,
        error => this.fehler(error));
      this.router.navigate(['/inka-we', this.liegenschaftId]);
    }
    //}
  }

  navigate(u: LiegenschaftRumpf) {
    sessionStorage.setItem('title', u.bezeichnung + " (Bw:" + u.sdmwenr + "; BImA:" + u.bimawenr + ")");
    sessionStorage.setItem('liegenschaftId', u.liegenschaftid);
    this.router.navigate(['/inka-we', u.liegenschaftid]);
  }
  get beginn(): string {
    return this.toDate(this.projekt.beginn);
  }
  get ende(): string {
    return this.toDate(this.projekt.ende);
  }
}
