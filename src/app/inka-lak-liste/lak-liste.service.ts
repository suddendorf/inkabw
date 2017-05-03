import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { Lak } from '../lak';

import { AbstractService } from '../abstract.service';


@Injectable()
export class LakListeService extends AbstractService{
 private urlLak = 'http://192.168.137.57:8080/SQLServer/LakServlet';

  constructor() { }
  searchLaks(liegenschaftId: string): Observable<Array<Lak>> {
    console.log("Search Projekte");
    console.log(JSON.stringify(liegenschaftId));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parms: string = JSON.stringify({ action: "search", liegenschaftId: liegenschaftId });
    return this.http.post(this.urlLak, parms, options)
      .map(this.extractLak)
      .catch(this.handleError);
  }
  
}
