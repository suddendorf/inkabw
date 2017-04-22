import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InkaAdminComponent } from './inka-admin/inka-admin.component';
import { InkaLakListeComponent } from './inka-lak-liste/inka-lak-liste.component';
import { Inka2AbwasserComponent } from './inka2-abwasser/inka2-abwasser.component';
import { Inka2WeComponent } from './inka2-we/inka2-we.component';
import { Inka2AdminComponent } from './inka2-admin/inka2-admin.component';

import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy , HashLocationStrategy} from '@angular/common';
import { InkaLakAComponent } from './inka-lak-a/inka-lak-a.component';
import { InkaWeSucheComponent } from './inka-we-suche/inka-we-suche.component';
import { InkaLakBComponent } from './inka-lak-b/inka-lak-b.component';
import { InkaLakFklComponent } from './inka-lak-fkl/inka-lak-fkl.component';


const appRoutes: Routes = [
  { path: 'inka-we', component: Inka2WeComponent },
  { path: 'inka-we-suche', component: InkaWeSucheComponent },
  { path: 'inka-admin', component: InkaAdminComponent },
  { path: 'inka-lak-a', component: InkaLakAComponent },
  { path: 'inka-lak-b', component: InkaLakBComponent },
  { path: 'inka-lak-fkl', component: InkaLakFklComponent },
  { path: '**', component: InkaWeSucheComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InkaAdminComponent,
    InkaLakListeComponent,
    Inka2AbwasserComponent,
    Inka2WeComponent,
    Inka2AdminComponent,
    InkaLakAComponent,
    InkaWeSucheComponent,
    InkaLakBComponent,
    InkaLakFklComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
