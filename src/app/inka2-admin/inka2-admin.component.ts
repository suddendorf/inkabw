import { Component, OnInit } from '@angular/core';
import { WE } from '../we';

@Component({
  selector: 'app-inka2-admin',
  templateUrl: './inka2-admin.component.html',
  styleUrls: ['./inka2-admin.component.css']
})
export class Inka2AdminComponent implements OnInit {
 public model:WE=new WE();

  constructor() { }

  ngOnInit() {
  }

}
