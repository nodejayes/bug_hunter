import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {LoginRoutingModule}   from './login-routing.module';
import {CardModule}           from 'primeng/card';
import {ButtonModule}         from 'primeng/button';
import {ReactiveFormsModule}  from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
