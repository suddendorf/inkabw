import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISA2Component } from '../lisa2-component';
import { LakListeService } from './lak-liste.service';

import { AbwProjekt } from '../abw-projekt';

@Component({
  selector: 'app-inka-lak-liste',
  providers: [LakListeService],
  templateUrl: './inka-lak-liste.component.html',
  styleUrls: ['./inka-lak-liste.component.css']
})
export class InkaLakListeComponent extends LISA2Component implements OnInit {
  private projekte: Array<AbwProjekt>;
  private liegenschaftId: string;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private service: LakListeService) {
    super();
  }
  
  isLand(): boolean {
    return localStorage.getItem("userGroup") == "32";
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getWE(params['liegenschaftId']);
    });
  }
  private getWE(liegenschaftId: string) {
    this.liegenschaftId = liegenschaftId;
    if (liegenschaftId) {
      this.search();
    }else {
      this.liegenschaftId = localStorage.getItem('liegenschaftId');
      this.search();
    }
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
    if ('LAK A' == lak.phase) {
      this.navigateA(lak);
    } else if ('LAK B' == lak.phase) {
      this.navigateB(lak);
    } else if ('LAK KL' == lak.phase) {
      this.navigateFkl(lak);
    } else if ('U' == lak.phase) {
      this.navigateUntersuchung(lak);
    }
  }

  navigateA(lak: AbwProjekt) {
    console.log('LAK-Nav: ' + lak);
    let projektId = '';
    if (lak != null) {
      projektId = lak.projektId;
    }
    let liegenschaftId = this.liegenschaftId;
    this.router.navigate(['/inka-lak-a', projektId, liegenschaftId]);
  }
  navigateB(lak: AbwProjekt) {
    let projektId = 'B';
    if (lak != null) {
      projektId = lak.projektId;
    }
    let liegenschaftId = this.liegenschaftId;
    this.router.navigate(['/inka-lak-b', projektId, liegenschaftId]);
  }
  navigateFkl(lak: AbwProjekt) {
    console.log('LAK-Nav: ' + lak);
    let projektId = 'KL';
    if (lak != null) {
      projektId = lak.projektId;
    }
    let liegenschaftId = this.liegenschaftId;
    this.router.navigate(['/inka-lak-fkl', projektId, liegenschaftId]);
  }
  navigateUntersuchung(lak: AbwProjekt) {
    console.log('LAK-Nav: ' + lak);
    let projektId = 'U';
    if (lak != null) {
      projektId = lak.projektId;
    }
    let liegenschaftId = this.liegenschaftId;
    this.router.navigate(['/inka-lak-a', projektId, liegenschaftId]);
  }
}
