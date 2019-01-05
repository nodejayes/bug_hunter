import {AfterContentInit, Component} from '@angular/core';
import {MenuItem}                            from 'primeng/api';
import {UserState}                           from '../../../states/user';
import {UserService}                         from '../../../backend-api/user.service';
import {ProjectState}                        from '../../../states/project';
import {ProjectService}                      from '../../../backend-api/project.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements AfterContentInit {
  items: MenuItem[] = [
    {label: 'Dashboard', icon: 'fa fa-tachometer', routerLink: '/dashboard'},
    {label: 'Tickets', icon: 'fa fa-ticket', routerLink: '/tickets'},
    {label: 'Settings', icon: 'fa fa-cogs', routerLink: '/settings'},
  ];

  constructor(private _userService: UserService,
              private _projectService: ProjectService,
              public userState: UserState,
              public projectState: ProjectState) { }

  logout() {
    this._userService.logout();
  }

  selectProject($event: any) {
    this._projectService.getProjectDetails($event.value.Id);
  }

  ngAfterContentInit(): void {
    this._projectService.getProjects();
  }
}
