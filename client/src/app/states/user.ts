import {IUser}           from '../../../../shared/models/user';
import {SimpleState}     from './simple-state';
import {BehaviorSubject} from 'rxjs';
import {Injectable}      from '@angular/core';
import {Router}          from '@angular/router';
import {environment}     from '../../environments/environment';

export interface IUserState {
  currentUser: IUser;
  accessToken: string;
  isBusy: boolean;
  isAuthenticated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserState extends SimpleState<IUserState> {
  tokenName = environment.tokenName;

  constructor(private _router: Router) {
    super({
      currentUser: null,
      accessToken: '',
      isBusy: false,
      isAuthenticated: false,
    });
  }

  CurrentUser$ = new BehaviorSubject<IUser>(null);
  AccessToken$ = new BehaviorSubject<string>(null);
  IsBusy$ = new BehaviorSubject(false);
  IsAuthenticated$ = new BehaviorSubject(false);

  get CurrentUser(): IUser {
    return this.CurrentState.currentUser;
  }
  set CurrentUser(value: IUser) {
    super.setState('currentUser', value);
    this.CurrentUser$.next(this.CurrentState.currentUser);
  }

  get AccessToken(): string {
    return localStorage.getItem(this.tokenName) || this.CurrentState.accessToken;
  }
  set AccessToken(value: string) {
    const authenticated = value && value.length > 5;
    if (!authenticated) {
      localStorage.removeItem(this.tokenName);
      this._router.navigate(['/login']);
    } else  {
      localStorage.setItem(this.tokenName, value);
      if (authenticated === true) {
        this._router.navigate(['/dashboard']);
      }
    }
    super.setState('isAuthenticated', authenticated);
    this.IsAuthenticated$.next(this.CurrentState.isAuthenticated);

    super.setState('accessToken', value);
    this.AccessToken$.next(this.CurrentState.accessToken);
  }

  get IsBusy(): boolean {
    return this.CurrentState.isBusy;
  }
  set IsBusy(value: boolean) {
    super.setState('isBusy', value);
    this.IsBusy$.next(this.CurrentState.isBusy);
  }

  get IsAuthenticated(): boolean {
    return this.CurrentState.isAuthenticated;
  }
}
