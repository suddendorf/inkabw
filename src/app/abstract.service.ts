import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

import { Message } from './message';

@Injectable()
export class AbstractService {
  public message:Message;
  constructor(public  http: Http,  router: Router) { }

  handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    console.log('handelError');
    let errMsg: string;
    console.log(error);
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.fehler || JSON.stringify(body);
      errMsg = `${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error('Handel:' + errMsg);
    // this.router.navigate(['/error', errMsg]);

    return Rx.Observable.throw(errMsg);

  }


   extractMessage(res: Response): Message {
    console.log('extract Message' + res);
    this.message = res.json();
    return this.message;
  }
}
