import { Component } from '@angular/core';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SecurityService]

})
export class AppComponent {
  title = 'INKA Berichtswesen';
  constructor(private securityService: SecurityService) { }

  isLoggedIn(): boolean {
    console.log("loggedIn");
    return this.securityService.isLoggedIn();
  }

}
