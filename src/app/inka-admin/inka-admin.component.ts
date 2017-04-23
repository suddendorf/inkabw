import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WE } from '../we';

@Component({
  selector: 'app-inka-admin',
  templateUrl: './inka-admin.component.html',
  styleUrls: ['./inka-admin.component.css']
})
export class InkaAdminComponent implements OnInit {
  public we: WE = new WE();

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.getWE(params['we']); //  (+) converts string 'id' to a number
    });
  }
  ngOnInit() {
  }
  private getWE(we: string) {
    console.log('WE:' + we);
   // this.we = we;
  }

}
