import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

import { AbwProjekt} from '../abw-projekt';

import { AbstractService } from '../abstract.service';


@Injectable()
export class LakListeService extends AbstractService {
  private urlLak ;

 constructor(public http: Http, router: Router) {
    super(http, router);
    this.urlLak = DataService.getWebServer() + 'ABWProjektSucheServlet';
  }
  

  searchLaks(liegenschaftId: string): Observable<Array<AbwProjekt>> {
    console.log("search Projekte:");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parms: string = JSON.stringify({ action: "search", liegenschaftId: liegenschaftId });
    return this.http.post(this.urlLak, parms, options)
      .map(this.extractLak)
      .catch(this.handleError);
  }

  private extractLak(res: Response): Array<AbwProjekt> {
    console.log("Projekte:"+res.json());
    const body: Array<AbwProjekt> = res.json();
    if (body) {
      return body;
    }
    return null;
  }
}
