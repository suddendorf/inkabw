import { Abwasser } from '../abwasser';
import { Message } from '../message';
import { Component, OnInit } from '@angular/core';
import { AbwasserService } from './abwasser.service';
import { ActivatedRoute } from '@angular/router';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-inka2-abwasser',
  providers: [AbwasserService],

  templateUrl: './inka2-abwasser.component.html',
  styleUrls: ['./inka2-abwasser.component.css']
})
export class Inka2AbwasserComponent implements OnInit {
  abw: Abwasser = new Abwasser();
  message: Message;
  isLand: boolean;
  isBima: boolean;
  einlArtAuswahl: string[];
  artAbwAuswahl: string[];
  einlArt: IMultiSelectOption[];
  artAbw: IMultiSelectOption[];

  constructor(private route: ActivatedRoute, private service: AbwasserService) {
    this.route.params.subscribe(params => {
      this.getAbw(params['liegenschaftId']);
    });
  }

  ngOnInit() {
    this.einlArt = [
      { id: 'öffentliches Kanalnetz', name: 'öffentliches Kanalnetz' },
      { id: 'privates Kanalnetz', name: 'privates Kanalnetz' },
      { id: 'Gewässer', name: 'Gewässer' }
    ];

    this.artAbw = [
      { id: 'Regenwasser', name: 'Regenwasser' },
      { id: 'häuslich', name: 'häuslich' },
      { id: 'gewerblich oder industriell', name: 'gewerblich oder industriell' },
      { id: 'unbekannt', name: 'unbekannt' }      
    ];
    //this.einlArtAuswahl=[2];
  }
  onChange() {
    console.log(this.einlArtAuswahl);
  }
  private read() {
    this.getAbw(this.abw.liegenschaftId);
    console.log("UserGroup: " + sessionStorage.getItem("userGroup"));

  }

  private getAbw(liegenschaftId: string) {
    this.isLand = sessionStorage.getItem("userGroup") == "32";
    this.isBima = sessionStorage.getItem("userGroup") == "35";
    this.message = new Message();
    console.log('ABW:' + liegenschaftId);
    if (liegenschaftId) {
      this.service.readAbw(liegenschaftId)
        .subscribe(
        abw => this.readABW(abw),
        error => this.message.fehler = <any>error);
    } else {
      let lid: string = sessionStorage.getItem('liegenschaftId');
      this.service.readAbw(lid)
        .subscribe(
        abw => { this.readABW(abw) },
        error => this.message.fehler = <any>error);
    }
  }

  readABW(abw: Abwasser) {
    console.log(abw);
    this.abw = abw;
    this.einlArtAuswahl = abw.einlArt;
    this.artAbwAuswahl=abw.artAbw;
  }

  update(abw: Abwasser) {
    this.message = new Message();
    if (abw != null) {
      if (abw.liegenschaftId == null) {
        let lid: string = sessionStorage.getItem('liegenschaftId');
        abw.liegenschaftId = lid;
      }
      abw.artAbw=this.artAbwAuswahl;
      abw.einlArt = this.einlArtAuswahl;
      console.log(JSON.stringify(abw));
      this.service.updateAbw(abw)
        .subscribe(
        message => this.message = message,
        error => this.message.fehler = <any>error);

    }
  }
  delete(abw: Abwasser) {
    this.message = new Message();
    if (abw != null) {
      console.log(JSON.stringify(abw));
      this.service.deleteAbw(abw)
        .subscribe(
        abw => this.abw = abw,
        error => this.message.fehler = <any>error);

    }
  }
}
