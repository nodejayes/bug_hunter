import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { MainSettingsComponent } from './pages/main-settings/main-settings.component';
import {SettingsRoutingModule}   from './settings-routing.module';

@NgModule({
  declarations: [MainSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
