import {AfterContentInit, Component} from '@angular/core';
import {UserService}                 from './backend-api/user.service';
import {UserState}                   from './states/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'client';

  constructor(private _userService: UserService,
              public userState: UserState) {}

  ngAfterContentInit(): void {
    this._userService.login('mgilg', 'XXX');
  }
}
