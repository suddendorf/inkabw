import {Abwasser} from '../abwasser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inka2-abwasser',
  templateUrl: './inka2-abwasser.component.html',
  styleUrls: ['./inka2-abwasser.component.css']
})
export class Inka2AbwasserComponent implements OnInit {
  model:Abwasser=new Abwasser();
  constructor() { }

  ngOnInit() {
  }

}
