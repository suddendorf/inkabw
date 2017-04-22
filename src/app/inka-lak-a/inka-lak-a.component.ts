import { Component, OnInit } from '@angular/core';
import { WE } from '../we';
import { LakA } from '../lak-a';

@Component({
  selector: 'app-inka-lak-a',
  templateUrl: './inka-lak-a.component.html',
  styleUrls: ['./inka-lak-a.component.css']
})
export class InkaLakAComponent implements OnInit {
  model: LakA=new LakA();
  constructor() { }

  ngOnInit() {
  }

}
