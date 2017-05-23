import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { Abwasser } from '../abwasser';
import { Message } from '../message';
import { AbstractService } from '../abstract.service';
import { DataService } from '../data.service';


@Injectable()
export class AbwasserService extends AbstractService {
  private urlABW :string;
  constructor(public http: Http, router: Router) {
    super(http, router);
    this.urlABW = DataService.getWebServer() + 'AbwasserServlet';
  }
  public readAbw(liegenschaftId: string): Observable<Abwasser> {
    console.log("readAbw");
     const params: URLSearchParams = new URLSearchParams();
    params.set('liegenschaftId', liegenschaftId);
    console.log(liegenschaftId);

    return this.http.get(this.urlABW, {
      search: params
    }).map(this.extractAbwasser)
      .catch(this.handleError);
  }
  public updateAbw(abw: Abwasser): Observable<Message> {
    console.log("updateAbw");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parms: string =  JSON.stringify({ action: "update", object: abw });
    console.log("update:"+parms);
    return this.http.post(this.urlABW, parms, options)
      .map(this.extractMessage)
      .catch(this.handleError);
  }
  public deleteAbw(abw: Abwasser) {
    console.log("deleteAbw");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parms: string = JSON.stringify({ action: "delete", object: abw });
    return this.http.post(this.urlABW, parms, options)
      .map(this.extractAbwasser)
      .catch(this.handleError);
  }
  private extractAbwasser(res: Response): Abwasser {
    console.log('extract Abwasser' + res);
    const body: Abwasser = res.json();
    if (body) {
      console.log("extracted Abwasser:" + JSON.stringify(body));
      return body;
    }
    return null;
  }
}
