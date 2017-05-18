import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { DataService } from './data.service';

export var AUTH_PROVIDERS: Array<any> = [{ provide: SecurityService, useClass: SecurityService }];


@Injectable()
export class SecurityService {
  url: string;

  constructor(private http: Http, private router: Router) {
  }

  login(user: string, password: string):  Observable<boolean>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parms: string = JSON.stringify({ action: "login", user: user, password: password });
    const url: string = DataService.getWebServer() + 'ABWLoginServlet';
    console.log(url);
   return this.http.post(url, parms, options)
      .map(this.extract)
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('userToken');
  }

  getToken(): any {
    return localStorage.getItem('userToken');
  }
  isLoggedIn(): boolean {
    return this.getToken() != null ;
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

    console.error('Handel:' + errMsg);

    return Rx.Observable.throw(errMsg);

  }




  private extract(res: Response):boolean {
    console.log('login' + res);
    let result = res.json();

    if (result.token) {
      localStorage.setItem('userToken',result.token );
      return true;
    }else{
      this.handleError(res);
    }
    return false;
  }
}
