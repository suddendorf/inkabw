import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../security.service';
import { DataService } from '../data.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  providers: [SecurityService, DataService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: string;
  ok:boolean;
  public webServer: string;
  public errorMessage: string;
  constructor(private router: Router, private securityService: SecurityService) { }

  ngOnInit() {
    this.logout();
  }   



  login() {

    this.error = null;
     this.securityService.login(this.user.name,this.user.password)
      .subscribe(
      err => this.start(err),
      error => this.error=error);
    this.router.navigate(['/inka_we-suche']);

  }

  logout() {
    this.securityService.logout();
  }

  start(err:string){
    console.log('logoin'+err);
    if ( err){
      this.error=err;
    }else{
      this.router.navigate(['/inka_we-suche']);
    }
  }

}
