import {IUser}           from '../../../../shared/models/user';
import {SimpleState}     from './simple-state';
import {BehaviorSubject} from 'rxjs';
import {Injectable}      from '@angular/core';

export interface IUserState {
  currentUser: IUser;
  accessToken: string;
  isBusy: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserState extends SimpleState<IUserState> {
  constructor() {
    super({
      currentUser: null,
      accessToken: '',
      isBusy: false,
    });
  }

  CurrentUser$ = new BehaviorSubject<IUser>(null);
  AccessToken$ = new BehaviorSubject<string>(null);
  IsBusy$ = new BehaviorSubject(false);

  get CurrentUser(): IUser {
    return this.CurrentState.currentUser;
  }
  set CurrentUser(value: IUser) {
    super.setState('currentUser', value);
    this.CurrentUser$.next(value);
  }

  get AccessToken(): string {
    return this.CurrentState.accessToken;
  }
  set AccessToken(value: string) {
    super.setState('accessToken', value);
    this.AccessToken$.next(value);
  }

  get IsBusy(): boolean {
    return this.CurrentState.isBusy;
  }
  set IsBusy(value: boolean) {
    super.setState('isBusy', value);
    this.IsBusy$.next(value);
  }
}
