import { Injectable } from '@angular/core';

export var AUTH_PROVIDERS:Array<any>=[{provide:SecurityService,useClass:SecurityService}];
  

@Injectable()
export class SecurityService {
  constructor() { }

  login(user: string, password: string): boolean {
    if (user === password) {
      localStorage.setItem('userName', user);
      return true;
    }
    return false;
  }
  logout (){
      localStorage.removeItem('userName');    
  }

  getUser():any{
    return localStorage.getItem('userName');
  }
  isLoggedIn():boolean{
    return this.getUser()!=null;
  }
}
