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
  //private static webServer: string = "http://localhost:8182/SQLServer/";//
  private static webServer: string = "http://192.168.137.57:8080/SQLServer/";
  //private static webServer: string = "/SQLServer/";//
  private urlSQL = 'SQLServlet';
  private urlWE = 'WEServlet';
  private urlABW = 'WESucheServlet';

  constructor(private http: Http, private router: Router) {
    this.getWebServerUrl();
  }


  private extractWE(res: Response): Array<WE> {
    const body: Array<WE> = res.json();
    return body;
  }
  private extractSingleWE(res: Response): WE {
    const body: WE = res.json();
    return body;
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

    return this.http.get(DataService.getWebServer() + this.urlWE, {
      search: params
    }).map(this.extractSingleWE)
      .catch(this.handleError);
  }

  public readSDMGeom(id: string): Observable<String> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('sql', "select geometrie_wkt from adm_sdm_liegenschaft s,herkunft_liegenschaft h where h.herkunft_id=s.we_nr and herkunft_art='SDM' and h.liegenschaft_id='" + id + "'");
    console.log(params);
    return this.http.get('http://localhost:8182/SQLServer/' + 'SQLServlet', {
      search: params
    }).map(this.extractGeom)
      .catch(this.handleError);
  }

  private extractGeom(res: Response): Array<String> {
    const body = res.json();
    console.log('extract Geom'+body);
    if ( body && body.length>0){
      let geom= body[0];
      return geom;
    }
    return null;
  }

  public searchWE(we: WE): Observable<Array<WE>> {
    if (DataService.getWebServer() == null) {
      this.getWebServerUrl();
    }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('userToken');
    let parms: string = JSON.stringify({ action: "search", token: token, we: we });
    const url: string = DataService.getWebServer() + this.urlABW;
    console.log(url);
    return this.http.post(url, parms, options)
      .map(this.extractWE)
      .catch(this.handleError);
  }


  public getWebServerUrl(): Observable<string> {
    console.log("get WebServer");
    // const params: URLSearchParams = new URLSearchParams();
    return this.http.get("/xclient.config", null)
      .map(this.extractWebServer)
      .catch(this.handleError);
  }

  private extractWebServer(res: Response): string {
    console.log('WebServer' + res);
    DataService.webServer = res.text();
    console.log('WebServer' + DataService.getWebServer());
    return DataService.webServer;
  }

}
