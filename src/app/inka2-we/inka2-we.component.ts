import { Component, OnInit } from '@angular/core';
import{WE} from '../we';
@Component({
  selector: 'app-inka2-we',
  templateUrl: './inka2-we.component.html',
  styleUrls: ['./inka2-we.component.css']
})
export class Inka2WeComponent implements OnInit {
  model: WE=new WE();
  constructor() { }

  ngOnInit() {
  }

}
