import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LakListeService } from './lak-liste.service';

import { Lak } from '../lak';

@Component({
  selector: 'app-inka-lak-liste',
  templateUrl: './inka-lak-liste.component.html',
  styleUrls: ['./inka-lak-liste.component.css']
})
export class InkaLakListeComponent implements OnInit {
  private laks: Array<Lak>;
  private liegenschaftId: string;
  loading: boolean = false;

  constructor(private router: Router, private service: LakService) { }

  ngOnInit() {
  }
  search() {
    console.log('search');
    this.loading = true;

    this.laks = new Array();
    this.service.searchLak(this.liegenschaftId)
      .subscribe(
      wes => this.getLaks(wes),
      error => this.getError(error));


  }
  private getLaks(laks: Array<Lak>) {
    this.laks = laks;
    this.loading = false
  }
  getError(s: any) {
    console.log('Fehler: ' + s);
    this.router.navigate(['/error', s]);

  }
 

  navigate(lak: Lak) {
    console.log('Projekt-Nav: ' + lak.projektId);
    const id = lak.projektId;
    this.router.navigate(['/inka-lak', id]);
  }
}
