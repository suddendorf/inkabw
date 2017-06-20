import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SecurityService} from '../security.service';

import { WE } from '../we';
@Component({
  selector: 'app-inka-we-suche',
  providers: [DataService],
  templateUrl: './inka-we-suche.component.html',
  styleUrls: ['./inka-we-suche.component.css']
})
export class InkaWeSucheComponent implements OnInit {
  wes: WE[];
  we: WE;
  loading:boolean=false;
  constructor(private router: Router, private service: DataService, private securityService: SecurityService) { 
    console.log('Konstruktor WE Suche');
    sessionStorage.removeItem('we');
  }

  ngOnInit() {
    this.securityService.checkLogin();
    console.log('init WE Suche');
    console.log('init WE Suche:' + this.we);
    this.loading=false;
    if (this.we == null) {
      this.we = new WE();            
    }
    this.we.abwasserspezifischeInfos=true;
    const sWe: string = sessionStorage.getItem('we.bezeichnung');
    if ( sWe!=null){
      this.we.bezeichnung = sWe;
      this.search();
    }
  }

  search() {
    console.log('search');
    this.loading=true;
    
    this.wes = new Array();
    this.service.searchWE(this.we)
      .subscribe(
      wes => this.getWEs(wes),
      error => this.getError(error));


  }
  private getWEs(wes:Array<WE>){
    this.wes=wes;
    this.loading=false
  }
  getError(s: any) {
    console.log('Fehler: ' + s);
    this.router.navigate(['/error', s]);

  }
  onSelection(u: WE) {
    // console.log("select:" + JSON.stringify(u));
    sessionStorage.setItem('we.bezeichnung', this.we.bezeichnung);//suchparameter
    sessionStorage.setItem('title', u.bezeichnung +"(Bw:"+u.weNrBw+"; BImA:"+u.weNrBima+ ")");
    
  }

  navigate(we: WE) {
    console.log('WE-Suche: ' + we);
     
    const id = we.liegenschaftId;
    sessionStorage.setItem('liegenschaftId', id);
    console.log('WE-Suche: ' + we.liegenschaftId);
    this.router.navigate(['/inka-we', id]);
  }
  
}
