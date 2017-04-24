import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

import { WE } from '../we';
@Component({
  selector: 'app-inka-we-suche',
  providers: [DataService],
  templateUrl: './inka-we-suche.component.html',
  styleUrls: ['./inka-we-suche.component.css']
})
export class InkaWeSucheComponent implements OnInit {
  wes: WE[];

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
      error => this.getError(error));


  }
  getError(s: any) {
    console.log('Fehler: ' + s);
    this.router.navigate(['/error', s]);

  }
  onSelection(u: WE) {
    // console.log("select:" + JSON.stringify(u));
  }

  navigate(we: WE) {
    console.log('WE-Suche: ' + we);
    const id = we.liegenschaftId;
    console.log('WE-Suche: ' + we.liegenschaftId);
    this.router.navigate(['/inka-we', id]);
  }
}
