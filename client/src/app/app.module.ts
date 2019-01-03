import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import {BackendApiModule}   from './backend-api/backend-api.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackendApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
