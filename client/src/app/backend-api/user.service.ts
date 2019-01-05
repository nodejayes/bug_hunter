import { Injectable } from '@angular/core';
import {UserState}    from '../states/user';
import {ApiService}   from './api.service';
import {ILoginResult} from '../../../../shared/communication/login-result';
import {IUser}        from '../../../../shared/models/user';
import {Observable}   from 'rxjs';
import {fromPromise}  from 'rxjs/internal-compatibility';

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

  logout() {
    this._userState.CurrentUser = null;
    this._userState.AccessToken = null;
  }

  loginWithToken(): Observable<boolean> {
    return fromPromise(new Promise((resolve) => {
      this._userState.IsBusy = true;
      this._api.get<IUser>('authentication/userByToken')
        .subscribe(v => {
          this._userState.AccessToken = this._userState.AccessToken;
          this._userState.CurrentUser = v;
          this._userState.IsBusy = false;
          resolve(this._userState.IsAuthenticated);
        });
    }));
  }
}
