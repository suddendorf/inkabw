import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from './security.service';
import { SecurityService } from './security.service';
import { LoggedInGuard } from './security/logged-in-guard';
import { AppComponent } from './app.component';
import { InkaLakListeComponent } from './inka-lak-liste/inka-lak-liste.component';
import { Inka2AbwasserComponent } from './inka2-abwasser/inka2-abwasser.component';
import { Inka2WeComponent } from './inka2-we/inka2-we.component';
import { Inka2AdminComponent } from './inka2-admin/inka2-admin.component';

import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { InkaLakAComponent } from './inka-lak-a/inka-lak-a.component';
import { InkaWeSucheComponent } from './inka-we-suche/inka-we-suche.component';
import { InkaLakBComponent } from './inka-lak-b/inka-lak-b.component';
import { InkaLakFklComponent } from './inka-lak-fkl/inka-lak-fkl.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { DataTableModule } from "angular2-datatable";
import { MapComponent } from './map/map.component';
const appRoutes: Routes = [
  { path: '', component: InkaWeSucheComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'inka-we', component: Inka2WeComponent, canActivate: [LoggedInGuard] },
  { path: 'inka-we/:liegenschaftId', component: Inka2WeComponent, canActivate: [LoggedInGuard] },
  { path: 'inka-we-suche', component: InkaWeSucheComponent, canActivate: [LoggedInGuard] },
  { path: 'inka-lak-a/:projektId/:liegenschaftId', component: InkaLakAComponent, canActivate: [LoggedInGuard] },
  { path: 'inka-lak-b/:projektId/:liegenschaftId', component: InkaLakBComponent, canActivate: [LoggedInGuard] },
  { path: 'inka-lak-fkl/:projektId/:liegenschaftId', component: InkaLakFklComponent, canActivate: [LoggedInGuard] },
  { path: 'map', component: MapComponent },
  { path: 'error/:errorMessage', component: ErrorComponent },
  { path: '**', component: InkaWeSucheComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    InkaLakListeComponent,
    Inka2AbwasserComponent,
    Inka2WeComponent,
    Inka2AdminComponent,
    InkaLakAComponent,
    InkaWeSucheComponent,
    InkaLakBComponent,
    InkaLakFklComponent,
    ErrorComponent,
    LoginComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SecurityService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
