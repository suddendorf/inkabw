import { Component, OnInit, ViewChild } from '@angular/core';
import { WE } from '../we';

import { ToggleCollapse } from '../toggle-collapse';
@Component({
  selector: 'app-inka2-we',
  templateUrl: './inka2-we.component.html',
  styleUrls: ['./inka2-we.component.css']
})

export class Inka2WeComponent extends ToggleCollapse implements OnInit {
  model: WE = new WE();
  constructor() {
    super();

  }

  ngOnInit() {
  }



}
