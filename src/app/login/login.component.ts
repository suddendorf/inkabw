import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../security.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  providers: [SecurityService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: string;
  constructor(private router: Router, private securityService: SecurityService) { }

  ngOnInit() {
    this.logout();    
  }
  login(): boolean {
    this.error = null;
    const ok: boolean = this.securityService.login(this.user.name, this.user.password);
    console.log('login:' + ok);
    if (!ok) {
      this.error = 'Benutzer unbenkannt oder Passwort falsch.';
    } else {
      this.router.navigate(['/inka_we-suche']);
    }
    return ok;
  }

  logout(){
    this.securityService.logout();
  }

}
