import { Injectable } from '@angular/core';
import {UserState}    from '../states/user';
import {ApiService}   from './api.service';
import {ILoginResult} from '../../../../shared/communication/login-result';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _userState: UserState,
              private _api: ApiService) {}

  login(userName: string, password: string) {
    this._userState.IsBusy = true;
    this._api.get<ILoginResult>('login/request', {username: userName, password})
      .subscribe(v => {
        this._userState.AccessToken = v.token;
        this._userState.CurrentUser = v.user;
        this._userState.IsBusy = false;
      });
  }
}
