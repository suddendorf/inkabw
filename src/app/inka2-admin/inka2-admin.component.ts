import {browser} from 'protractor/built';
import { Component, OnInit ,Input} from '@angular/core';
import { WE } from '../we';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inka2-admin',
  providers: [DataService],
  templateUrl: './inka2-admin.component.html',
  styleUrls: ['./inka2-admin.component.css']
})
export class Inka2AdminComponent implements OnInit {

  public we: WE = new WE();
  public errorMessage: String;
 constructor(private route: ActivatedRoute, private service: DataService) {
    this.route.params.subscribe(params => {
      this.getWE(params['liegenschaftId']);
    });
  }
  ngOnInit() {
  }
  private getWE(id: string) {
    console.log('WE:' + id);
    if (id) {
      this.readWE(id);
    }else{
      let lid:string=sessionStorage.getItem('liegenschaftId');
        this.readWE(lid);
      }
    
  }
  private readWE(id: string) {
    this.service.readWE(id)
      .subscribe(
      we => this.we = we,
      error => this.errorMessage = <any>error);

  }
 
}