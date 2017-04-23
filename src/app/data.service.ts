import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { WE } from './we';
@Injectable()
export class DataService {

  private urlWE = 'http://localhost:8181/SQLServer/SQLServlet';
  constructor(private http: Http, private router: Router) { }

  public searchWEx(): Observable<Array<WE>> {
    return this.http.get(this.urlWE + 'Suche', { withCredentials: true })
      .map(this.extractWE)
      .catch(this.handleError);
  }
  private extractWE(res: Response): Array<WE> {
    console.log('extract WE' + res);
    const body: Array<WE> = res.json();
    return body;
  }
  private extractSingleWE(res: Response): WE {
    console.log('extract WE' + res);
    const body: Array<WE> = res.json();
    return body[0];
  }
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    console.log('handelError');
    let errMsg: string;
    console.log(error);
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error('Handel:' + errMsg);
    // this.router.navigate(['/error', errMsg]);

    return Rx.Observable.throw(errMsg);

  }

  public searchWE(): Observable<Array<WE>> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('sql', 'select liegenschaftid \"liegenschaftId\",liegenschaft_nr \"liegenschaftNr\", 0 \"weNrBw\",1 \"weNrBima\",bezeichnung \"bezeichnung\" from admin_liegenschaft where rownum <5 order by 1');

    return this.http.get(this.urlWE, {
      search: params
    }).map(this.extractWE)
      .catch(this.handleError);
  }

  public readWE(id: string): Observable<WE> {
    const params: URLSearchParams = new URLSearchParams();
    let sql = 'select liegenschaft_id \"liegenschaftId\",liegenschaft_nr \"liegenschaftNr\", 0 \"weNrBw\",1 \"weNrBima\",bezeichnung \"bezeichnung\" from admin_liegenschaft where liegenschaft_id=\'';
    sql += id;
    sql += '\'';
    params.set('sql', sql);

    return this.http.get(this.urlWE, {
      search: params
    }).map(this.extractSingleWE)
      .catch(this.handleError);
  }
}
