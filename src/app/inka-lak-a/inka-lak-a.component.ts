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
  providers: [ProjektdetailService, DataService],
  templateUrl: './inka-lak-a.component.html',
  styleUrls: ['./inka-lak-a.component.css']
})
export class InkaLakAComponent extends ToggleCollapse implements OnInit {
  projekt: AbwProjektDetail = new AbwProjektDetail();
  private liegenschaftId: string; // id der primaeren Lg
  message: Message;
  primaer: string;
  lieg: Array<{ id: string, title: string, weNrBw: string, weNrBima: string, bezeichnung: string }> = new Array();
  neueLiegenschaft: string;

  constructor(private route: ActivatedRoute, private router: Router, private service: ProjektdetailService, private dataService: DataService) {
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
      p => this.readSekLgs(p),
      error => this.message.fehler = <any>error);
    if (this.lieg.length == 0) {
      let we: WE = new WE();
      we.abwasserspezifischeInfos=true;
      this.dataService.searchWE(we)
        .subscribe(
        l => this.assign(l),
        error => this.message.fehler = <any>error);
    }
  }
  assign(l: WE[]) {
    for (let i of l) {
      let bez: string = i.bezeichnung + "(Bw:" + i.weNrBw + "; BImA:" + i.weNrBima + ")";
      this.lieg.push({ id: i.liegenschaftId, title: bez, weNrBw: i.weNrBw, weNrBima: i.weNrBima, bezeichnung: i.bezeichnung });
    }
  }
  deleteLiegenschaft(l: LiegenschaftRumpf) {
    this.projekt.liegenschaften = this.projekt.liegenschaften.filter(obj => obj !== l);

  }
  addLiegenschaft() {
    console.log(this.neueLiegenschaft);
    if (!this.neueLiegenschaft) {
      this.fehler("Bitte wählen Sie eine Liegenschaft aus.");
      return;
    }
    for (let l of this.lieg) {
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
    this.fehler("Bitte wählen Sie eine Liegenschaft aus der Liste aus.");

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
  checkPrimaer(l: LiegenschaftRumpf) :boolean{
    let ok:boolean= this.primaer==l.liegenschaftid;
    return ok;
  }
  update(p: AbwProjektDetail) {
    this.message = new Message();
    if (p != null) {
      if (!p.projektNr) {
        this.message.fehler = 'Die Projekt Nummer darf nicht leer sein';
        return;
      }
      if (p.status=='Altdaten') {
        this.message.fehler = 'Der Status Altdaten ist bei der Datensatzänderung nicht erlaubt.';
        return;
      }
      console.log(JSON.stringify(p.kosten));
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

  get beginn(): string {
    return this.toDate(this.projekt.beginn);
  }
  get ende(): string {
    return this.toDate(this.projekt.ende);
  }
}
