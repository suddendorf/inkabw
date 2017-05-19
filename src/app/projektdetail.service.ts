import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { Message } from './message';
import { AbstractService } from './abstract.service';
import { DataService } from './data.service';
import { AbwProjektDetail } from './abw-projekt-detail';


@Injectable()
export class ProjektdetailService extends AbstractService {
  url: string;
  constructor(public http: Http, router: Router) {
    super(http, router);
    this.url = DataService.getWebServer() + 'ABWProjektDetailServlet';
  }

  public read(id: string): Observable<AbwProjektDetail> {
    console.log("readAbw");
    const params: URLSearchParams = new URLSearchParams();
    let token = localStorage.getItem('userToken');

    params.set('projektId', id);
    params.set('token', token);
    console.log(id);

    return this.http.get(this.url, {
      search: params
    }).map(this.extract)
      .catch(this.handleError);
  }
  public update(abw: AbwProjektDetail): Observable<Message> {
    console.log("updateAbw");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('userToken');
    let parms: string = JSON.stringify({ action: "update", token: token, object: abw });
    console.log("update:" + parms);
    return this.http.post(this.url, parms, options)
      .map(this.extractMessage)
      .catch(this.handleError);
  }
  public delete(id: string) {
    console.log("delete");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('userToken');
    let parms: string = JSON.stringify({ action: "delete", object: id, token: token });
    return this.http.post(this.url, parms, options)
      .map(this.extract)
      .catch(this.handleError);
  }
  private extract(res: Response): AbwProjektDetail {
    console.log('extract AbwProjektDetail' + res);
    let any = res.json();
    if (any.fehler) {
      throw any;
    }
    const body: AbwProjektDetail = res.json();
    if (body) {
      console.log("extracted AbwProjektDetail:" + JSON.stringify(body));
      return body;
    }
    return null;
  }
}
