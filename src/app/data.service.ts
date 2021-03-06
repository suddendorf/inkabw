import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { WE } from './we';
import { Message } from './message';

@Injectable()
export class DataService {

  private static webServer: string = "/inkabw/";
  // private static webServer: string = "http://192.168.137.152:8182/SQLServer/";
  //private static webServer: string = "http://192.168.137.152:8181/inkabw/";

  private urlSQL = 'SQLServlet';
  private urlWE = 'WEServlet';
  private urlABW = 'WESucheServlet';

  constructor(private http: Http, private router: Router) {
    // this.getWebServerUrl();
  }


  private extractWE(res: Response): Array<WE> {
    const body: Array<WE> = res.json();
    return body;
  }
  private extractSingleWE(res: Response): WE {
    const test=res.text();
    console.log(test);
    const u: WE = res.json();
    sessionStorage.setItem('title', u.bezeichnung+ " (Bw:" + u.weNrBw + "; BImA:" + u.weNrBima + ")");
    return u;
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.log('Handel:' + errMsg);

    return Rx.Observable.throw(errMsg);

  }

  public static getWebServer() {
    return this.webServer;
  }


  public readWE(id: string): Observable<WE> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('liegenschaftId', id);
    console.log(id);
    return this.http.get(DataService.getWebServer() + this.urlWE, {
      search: params
    }).map(this.extractSingleWE)
      .catch(this.handleError);
  }

  public readSDMGeom(id: string): Observable<String> {
    const params: URLSearchParams = new URLSearchParams();
    if ( id){
      params.set('liegenschaftId', id);
    }
    return this.http.get(DataService.getWebServer() + 'WKTServlet', {
      //return this.http.get('http://localhost:8182/' + 'WKTServlet', {
      search: params
    }).map(this.extractGeom)
      .catch(this.handleError);
  }

  private extractGeom(res: Response): Array<String> {
    const body = res.json();
    console.log('extract Geom' + body);
    if (body) {
      let geom = body;
      return geom;
    }
    return null;
  }

  public searchWE(we: WE): Observable<Array<WE>> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let token = sessionStorage.getItem('userToken');
    let parms: string = JSON.stringify({ action: "search", token: token, we: we });
    const url: string = DataService.getWebServer() + this.urlABW;
    return this.http.post(url, parms, options)
      .map(this.extractWE)
      .catch(this.handleError);
  }


  /*public getWebServerUrl(): Observable<string> {
     const params: URLSearchParams = new URLSearchParams();
    return this.http.get("/xclient.config", null)
      .map(this.extractWebServer)
      .catch(this.handleError);
  }

  private extractWebServer(res: Response): string {
    DataService.webServer = res.text();
    console.log('dataservice:'+DataService.webServer);
    return DataService.webServer;
  }
*/
}
