import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }           from './app-routing.module';
import { AppComponent }              from './app.component';
import {BackendApiModule}            from './backend-api/backend-api.module';
import { PageNotFoundComponent }     from './pages/page-not-found/page-not-found.component';
import { HeaderComponent }           from './components/header/header.component';
import { LogoComponent }             from './components/header/logo/logo.component';
import { HeaderToolbarComponent }    from './components/header/header-toolbar/header-toolbar.component';
import {ButtonModule, MenubarModule} from 'primeng/primeng';
import {BrowserAnimationsModule}     from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LogoComponent,
    HeaderToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    AppRoutingModule,
    BackendApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
