import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent}  from './pages/page-not-found/page-not-found.component';
import {IsAuthenticatedGuard}   from './guards/is-authenticated.guard';
import {LoginRedirectGuard}     from './guards/login-redirect.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [LoginRedirectGuard]
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule',
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'tickets',
    loadChildren: './ticket/ticket.module#TicketModule',
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [IsAuthenticatedGuard]
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
