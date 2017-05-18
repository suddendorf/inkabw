import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LISA2Component } from '../lisa2-component';
import { LakListeService } from './lak-liste.service';

import { AbwProjekt } from '../abw-projekt';

@Component({
  selector: 'app-inka-lak-liste',
  providers: [LakListeService],
  templateUrl: './inka-lak-liste.component.html',
  styleUrls: ['./inka-lak-liste.component.css']
})
export class InkaLakListeComponent  extends LISA2Component implements OnInit{
  private projekte: Array<AbwProjekt>;
  private liegenschaftId: string;
  loading: boolean = false;

  constructor(private route: ActivatedRoute,private router: Router, private service: LakListeService) { 
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getWE(params['id']);
    });
  }
  private getWE(id: string) {
    this.liegenschaftId = id;
    this.search();

  }
  search() {
    this.loading = true;

    this.projekte = new Array();
    this.service.searchLaks(this.liegenschaftId)
      .subscribe(
      wes => this.getLaks(wes),
      error => this.getError(error));


  }
  private getLaks(laks: Array<AbwProjekt>) {
    this.projekte = laks;
    this.loading = false;
  }
  getError(s: any) {
    console.log('Fehler: ' + s);
    //this.route.navigate(['/error', s]);

  }

 
  datum(): string {
    return 'x';
  }

  navigate(lak: AbwProjekt) {
    console.log('LAK-Nav: ' + lak);
    let id = 'A';
    if ( lak !=null){
      id=lak.projektId;
    }
    this.router.navigate(['/inka-lak-a', id]);
  }
}
