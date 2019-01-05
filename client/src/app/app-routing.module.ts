import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent}  from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule',
  },
  {
    path: 'tickets',
    loadChildren: './ticket/ticket.module#TicketModule',
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
