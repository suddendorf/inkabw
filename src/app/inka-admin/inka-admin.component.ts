import { Component, OnInit } from '@angular/core';
import { WE } from '../we';
@Component({
  selector: 'app-inka-admin',
  templateUrl: './inka-admin.component.html',
  styleUrls: ['./inka-admin.component.css']
})
export class InkaAdminComponent implements OnInit {
  public model:WE=new WE();

  constructor() { }

  ngOnInit() {
  }
  

}
