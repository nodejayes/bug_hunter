import { Component, OnInit } from '@angular/core';
import {MenuItem}            from 'primeng/api';
import {UserState}           from '../../../states/user';
import {UserService}         from '../../../backend-api/user.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {
  items: MenuItem[] = [
    {label: 'Dashboard', icon: 'fa fa-tachometer', routerLink: '/dashboard'},
    {label: 'Tickets', icon: 'fa fa-ticket', routerLink: '/tickets'},
    {label: 'Settings', icon: 'fa fa-cogs', routerLink: '/settings'},
  ];

  constructor(private _userService: UserService,
              public userState: UserState) { }

  ngOnInit() {
  }

  logout() {
    this._userService.logout();
  }
}
