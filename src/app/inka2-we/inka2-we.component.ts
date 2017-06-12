import { Component, OnInit } from '@angular/core';
import { WE } from '../we';
@Component({
  selector: 'app-inka2-we',
  templateUrl: './inka2-we.component.html',
  styleUrls: ['./inka2-we.component.css']
})
export class Inka2WeComponent implements OnInit {
  model: WE = new WE();
  private title;
  private collapse: boolean = false;
  constructor() {
  }

  ngOnInit() {
    let lid: string = sessionStorage.getItem('title');
    console.log(lid);
    this.title = lid;
  }
  private toggleCollapse() {
    this.collapse = !this.collapse;
  }

}
