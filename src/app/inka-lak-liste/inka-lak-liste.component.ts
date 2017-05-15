import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LakListeService } from './lak-liste.service';

import { AbwProjekt } from '../abw-projekt';

@Component({
  selector: 'app-inka-lak-liste',
  providers: [LakListeService],
  templateUrl: './inka-lak-liste.component.html',
  styleUrls: ['./inka-lak-liste.component.css']
})
export class InkaLakListeComponent implements OnInit {
  private projekte: Array<AbwProjekt>;
  private liegenschaftId: string;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private service: LakListeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getWE(params['id']);
    });
    this.search();
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

  toDate(d: Date): string {
    console.log("Datum:"+d);
    if (d != null) {
      if (typeof d === "Date") {
        return d.toLocaleDateString();
      } else if (typeof d === "string") {
        let s: string = d;
        /*if (s.length > 0) {
          d = new Date(s);
          return d.toLocaleDateString();
        }*/
      }
    }
    return '-';
  }

  datum(): string {
    return 'x';
  }

  navigate(lak: AbwProjekt) {
    console.log('Projekt-Nav: ' + lak.projektId);
    const id = lak.projektId;
    //this.route.navigate(['/inka-lak', id]);
  }
}
