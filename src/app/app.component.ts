import { Component, Inject } from '@angular/core';
import { SecurityService } from './security.service';
import { Store } from './store/store';
import { State } from './store/state';

declare var ol: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SecurityService]

})
export class AppComponent {
  title: string;
  constructor(private securityService: SecurityService, @Inject(Store) private store: Store) {
    this.store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: State = this.store.getState();
    this.title = state.title;
  }

  ngOnInit(): void {
    this.securityService.checkLogin();
  }
}
