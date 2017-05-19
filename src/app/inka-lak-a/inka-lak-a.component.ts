import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../message';
import { LISA2Component} from '../lisa2-component';
import { AbwProjektDetail } from '../abw-projekt-detail';
import { ProjektdetailService } from '../projektdetail.service';

@Component({
  selector: 'app-inka-lak-a',
   providers: [ProjektdetailService],
  templateUrl: './inka-lak-a.component.html',
  styleUrls: ['./inka-lak-a.component.css']
})
export class InkaLakAComponent  extends LISA2Component implements OnInit {
  projekt: AbwProjektDetail = new AbwProjektDetail();
  message: Message ;

  constructor(private route: ActivatedRoute, private service: ProjektdetailService) {
    super();
    this.route.params.subscribe(params => {
      this.get(params['id']);
    });
  }

  ngOnInit() {

  }

  private get(id: string) {
    this.message = new Message();
    console.log('Projekt:' + id);
    this.message = new Message();
    this.service.read(id)
      .subscribe(
      p => this.projekt = p,
      error => this.message.fehler = <any>error);

  }

  update(p: AbwProjektDetail) {
    this.message = new Message();
    this.message = new Message();
    if (p != null) {
      console.log(JSON.stringify(p));
      this.service.update(p)
        .subscribe(
        message => this.message = message,
        error => this.message.fehler = <any>error);

    }
  }
  delete(p: AbwProjektDetail) {
    this.message = new Message();
    if (p != null) {
      console.log(JSON.stringify(p));
      this.service.delete(p.projektId)
        .subscribe(
        abw => this.projekt = abw,
        error => this.message.fehler = <any>error);

    }
  }

  get beginn():string{
    return this.toDate(this.projekt.beginn);
  }
   get ende():string{
    return this.toDate(this.projekt.ende);
  }
}
