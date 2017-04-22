import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WE } from './we';
@Injectable()
export class DataService {

  private urlWE: string = "http://localhost:8182/SQLServer/SQLServlet";
  constructor(private http: Http) { }

  public searchWEx(): Observable<Array<WE>> {
    return this.http.get(this.urlWE + "Suche", { withCredentials: true })
      .map(this.extractWE)
      .catch(this.handleError);
  }
  private extractWE(res: Response): Array<WE> {
    console.log('extract WE'+res);
    let body: Array<WE> = res.json();
    return body;
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
    console.error(errMsg);
    return Observable.throw(errMsg);

  }

  public searchWE(): Observable<Array<WE>> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('sql', "select liegenschaft_nr \"liegenschaftNr\", 0 \"weNrBw\",1 \"weNrBima\",bezeichnung \"bezeichnung\" from admin_liegenschaft where rownum <10 order by 1");

    return this.http.get(this.urlWE, {
      search: params
    }).map(this.extractWE)
      .catch(this.handleError);
  }
}
