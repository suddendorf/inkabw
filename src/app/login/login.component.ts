import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../security.service';
import { DataService } from '../data.service';
import { User } from '../user';
import { Message } from '../message';
@Component({
  selector: 'app-login',
  providers: [SecurityService, DataService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: string;
  public webServer: string;
  message: Message;
  constructor(private router: Router,private securityService: SecurityService) { }

  ngOnInit() {
    this.logout();
  }



  login(): boolean {

    this.error = null;
    this.securityService.login(this.user.name, this.user.password);
    let ok: boolean = this.securityService.isLoggedIn();
    console.log('login:' + ok);
    if (!ok) {
      this.error = 'Benutzer unbenkannt oder Passwort falsch.';
    } else {
      this.router.navigate(['/inka_we-suche']);
    }
    return ok;
  }

  logout() {
    this.securityService.logout();
  }


}
