import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Title} from '@angular/platform-browser';
import { DataService } from './data.service';

export var AUTH_PROVIDERS: Array<any> = [{ provide: SecurityService, useClass: SecurityService }];


@Injectable()
export class SecurityService {
  url: string;

  constructor(private http: Http, private router: Router, private titleService: Title) {
  }

  login(user: string, password: string): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let parms: string = JSON.stringify({ action: "login", user: user, password: password });
    const url: string = DataService.getWebServer() + 'ABWLoginServlet';
    console.log(url);
    this.titleService.setTitle("INKA Berichtswesen "+user);
    return this.http.post(url, parms, options)
      .map(this.extract)
      .catch(this.handleError);


  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userGroup');
  }

  getToken(): any {
    return localStorage.getItem('userToken');
  }

  getUserGroup(): String{
    return localStorage.getItem('userGroup');
  }
  isLoggedIn(): boolean {
    return this.getToken() != null;
  }



  private handleError(error: Response | any) {
    console.log('login Error'
    );
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json();
      if (body) {
        errMsg = body.fehler;
      }
    }

    if (!errMsg) {
      errMsg = 'Fehler bei der Kommunikation mit dem WEB-Server.';
    }

    return Rx.Observable.throw(errMsg);

  }


  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  private extract(res: Response): string {
    console.log('login' + res);
    
    let result = res.json();
    if (result.token && result.gruppe) {
      localStorage.setItem('userToken', result.token);
      localStorage.setItem('userGroup',result.gruppe);
      return null;
    } else if (result.fehler) {
      return result.fehler;
    }
    else {
      this.handleError(res);
    }
    return res.text();
  }
}
