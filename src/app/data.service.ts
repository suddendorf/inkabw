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

  private urlSQL = 'http://192.168.137.57:8080/SQLServer/SQLServlet';
   private urlABW = 'http://192.168.137.57:8080/SQLServer/INKABWServlet';

  constructor(private http: Http, private router: Router) { }


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



 
  public readWE(id: string): Observable<WE> {
    const params: URLSearchParams = new URLSearchParams();
    let sql = "select l.liegenschaft_id,l.liegenschaft_nr,l.bezeichnung,l.ort,l.strasse,l.plz,herkunft_id \"we_nr_bw\", bwdlz.bwdlz||' '||bwdlz.bezeichnung \"bwdlz\" ,kompz.bezeichnung \"kompz\" " +
      " ,bima_we_nr \"we_nr_bima\" ,'-' \"bezeichnung_bima\" ,sl.lgbez \"bezeichnung_bw\"" +
      " from admin_liegenschaft l, herkunft_liegenschaft hl , adm_sdm_liegenschaft_staende sl, adm_sdm_bwdlz_staende bwdlz, adm_sdm_kompz kompz" +
      " where  l.liegenschaft_id=hl.liegenschaft_id" +
      " and herkunft_art='SDM'" +
      " and sl.we_nr=hl.herkunft_id" +
      " and kompz.kompz_id=sl.kompz_id" +
      " and sl.sdm_stand=(select sdm_stand from adm_sdm_aktuell where status ='A')" +
      " and bwdlz.bwdlz=sl.bwdlz" +
      " and l.liegenschaft_id=\'";
    sql += id;
    sql += '\'';
    params.set('sql', sql);

    return this.http.get(this.urlSQL, {
      search: params
    }).map(this.extractSingleWE)
      .catch(this.handleError);
  }
 
   public searchWE(we: WE): Observable<Array<WE>> {
    console.log("Search WE");
    console.log(JSON.stringify(we));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parms: string = JSON.stringify({ action: "search", we: we });
    return this.http.post(this.urlABW, parms, options)
      .map(this.extractWE)
      .catch(this.handleError);
  }
  
}
