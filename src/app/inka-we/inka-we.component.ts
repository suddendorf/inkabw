import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WE } from '../we';
@Component({
  selector: 'app-inka-we',
  templateUrl: './inka-we.component.html',
  styleUrls: ['./inka-we.component.css']
})
export class InkaWEComponent implements OnInit {
  private we: WE;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.getWE(params['we']); // (+) converts string 'id' to a number
    });
  }

  ngOnInit() {
  }
  private getWE(we: WE) {
    console.log('WE:' + we);
    this.we = we;
  }
}
