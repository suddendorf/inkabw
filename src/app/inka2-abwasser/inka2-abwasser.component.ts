import { Abwasser } from '../abwasser';
import { Message } from '../message';
import { Component, OnInit } from '@angular/core';
import { AbwasserService } from './abwasser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inka2-abwasser',
  providers: [AbwasserService],

  templateUrl: './inka2-abwasser.component.html',
  styleUrls: ['./inka2-abwasser.component.css']
})
export class Inka2AbwasserComponent implements OnInit {
  abw: Abwasser = new Abwasser();
  public message: Message = new Message();
  public errorMessage: String;

  constructor(private route: ActivatedRoute, private service: AbwasserService) {
    this.route.params.subscribe(params => {
      this.getAbw(params['id']);
    });
  }

  ngOnInit() {
  }

  private read() {
    this.getAbw(this.abw.liegenschaftId);
  }


  private getAbw(id: string) {
    this.message = new Message();
    console.log('ABW:' + id);
    this.errorMessage = null;
    this.service.readAbw(id)
      .subscribe(
      abw => this.abw = abw,
      error => this.errorMessage = <any>error);

  }

  update(abw: Abwasser) {
    this.message = new Message();
    this.errorMessage = null;
    if (abw != null) {
      console.log(JSON.stringify(abw));
      this.service.updateAbw(abw)
        .subscribe(
        message => this.message = message,
        error => this.errorMessage = <any>error);

    }
  }
  delete(abw: Abwasser) {
    this.message = new Message();
    this.errorMessage = null;
    if (abw != null) {
      console.log(JSON.stringify(abw));
      this.service.deleteAbw(abw)
        .subscribe(
        abw => this.abw = abw,
        error => this.errorMessage = <any>error);

    }
  }
}
