import { Abwasser } from '../abwasser';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inka2-abwasser',
  providers: [DataService],

  templateUrl: './inka2-abwasser.component.html',
  styleUrls: ['./inka2-abwasser.component.css']
})
export class Inka2AbwasserComponent implements OnInit {
  abw: Abwasser = new Abwasser();
   public errorMessage: String;

  constructor(private route: ActivatedRoute, private service: DataService) {
    this.route.params.subscribe(params => {
      this.getAbw(params['id']);
    });
  }

  ngOnInit() {
  }

  private getAbw(id: string) {
    console.log('ABW:' + id);
    this.service.readAbw(id)
      .subscribe(
      abw => this.abw = abw,
      error => this.errorMessage = <any>error);

  }

  update(abw:Abwasser){
    if ( abw !=null){
      console.log(JSON.stringify(abw));
    }
  }
}
