import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
import { LISA2Component } from '../lisa2-component';
import { AbwProjektDetail } from '../abw-projekt-detail';
import { ProjektdetailService } from '../projektdetail.service';



@Component({
  selector: 'app-inka-lak-fkl',
  providers: [ProjektdetailService],
  templateUrl: './inka-lak-fkl.component.html',
  styleUrls: ['./inka-lak-fkl.component.css']
})
export class InkaLakFklComponent extends LISA2Component implements OnInit {

  projekt: AbwProjektDetail = new AbwProjektDetail();
  private liegenschaftId: string; // id der primaeren Lg
  message: Message;

  constructor(private route: ActivatedRoute, private router: Router, private service: ProjektdetailService) {
    super();
    this.projekt.phase = 'LAK KL';
    this.route.params.subscribe(params => {
      this.get(params['projektId'], params['liegenschaftId']);
    });
  }

  ngOnInit() {

  }


  isLand(): boolean {
    return localStorage.getItem("userGroup") == "32";
  }

  isFFE(): boolean {
    return localStorage.getItem("userGroup") == "33"
  }


  read() {
    if (this.projekt.projektId) {
      this.get(this.projekt.projektId, this.liegenschaftId);
    }
  }

  private get(projektId: string, liegenschaftId: string) {
    this.message = new Message();
    console.log('Projekt:' + projektId); 
    this.liegenschaftId = liegenschaftId;
    // beim neu Anlegen wird die ID auf 'KL' gesetzt, um dem Server mitzuteilen, dass ein Projekt der Phases LAK KL angelegt werden soll.
    // der Server ermittelt die möglichen Kostenarten und schickt diese zurück
    if (!projektId) {
      projektId = 'KL';

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
        message => this.message = message,
        error => this.fehler(error));
      this.router.navigate(['/inka-we', this.liegenschaftId]);
    }
  }

  get beginn(): string {
    return this.toDate(this.projekt.beginn);
  }
  get ende(): string {
    return this.toDate(this.projekt.ende);
  }
}