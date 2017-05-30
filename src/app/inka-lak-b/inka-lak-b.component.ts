
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../message';
import { LISA2Component } from '../lisa2-component';
import { AbwProjektDetail } from '../abw-projekt-detail';
import { ProjektdetailService } from '../projektdetail.service';

@Component({
  selector: 'app-inka-lak-b',
  providers: [ProjektdetailService],
  templateUrl: './inka-lak-b.component.html',
  styleUrls: ['./inka-lak-b.component.css']
})
export class InkaLakBComponent extends LISA2Component implements OnInit {
  projekt: AbwProjektDetail = new AbwProjektDetail();
  message: Message;

  constructor(private route: ActivatedRoute, private service: ProjektdetailService) {
    super();
    this.projekt.phase = 'LAK B';
    this.route.params.subscribe(params => {
      this.get(params['projektId'], params['liegenschaftId']);
    });
  }

  ngOnInit() {

  }

  private get(projektId: string, liegenschaftId: string) {
    this.message = new Message();
    console.log('Projekt:' + projektId);
    // beim neu Anlegen wird die ID auf 'B' gesetzt, um dem Server mitzuteilen, dass ein Projekt der Phases LAK B angelegt werden soll.
    // der Server ermittelt die möglichen Kostenarten und schickt diese zurück
    if (!projektId) {
      projektId = 'B';

    }
    this.service.read(projektId, liegenschaftId)
      .subscribe(
      p => this.projekt = p,
      error => this.message.fehler = <any>error);
  }

  update(p: AbwProjektDetail) {
    this.message = new Message();
    if (p != null) {
      if (!p.projektNr) {
        this.message.fehler = 'Die Projekt Nummer darf nicht leer sein';
        return;
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

    }
  }

  get beginn(): string {
    return this.toDate(this.projekt.beginn);
  }
  get ende(): string {
    return this.toDate(this.projekt.ende);
  }
}

