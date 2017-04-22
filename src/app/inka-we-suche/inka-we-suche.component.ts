import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

import {WE} from '../we';
@Component({
  selector: 'app-inka-we-suche',
   providers: [DataService],
  templateUrl: './inka-we-suche.component.html',
  styleUrls: ['./inka-we-suche.component.css']
})
export class InkaWeSucheComponent implements OnInit {
  wes:WE[];
  public errorMessage: String;
  
  constructor(private router: Router, private service: DataService) { }

  ngOnInit() {
       console.log('init WE Suche');
     this.search();
 
  }
  search() {
    this.wes = new Array();
    this.service.searchWE()
      .subscribe(
      wes => this.wes = wes,
      error => this.errorMessage = <any>error);


  }
  onSelection(u: WE) {
    //console.log("select:" + JSON.stringify(u));
  }
}
