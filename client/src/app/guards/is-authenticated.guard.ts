import { Injectable }                                                     from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable }                                                     from 'rxjs';
import {UserState}                                                        from '../states/user';
import {UserService}                                                      from '../backend-api/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private _userState: UserState,
              private _userService: UserService,
              private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._userState.AccessToken || this._userState.AccessToken.length < 5) {
      this._router.navigate(['/login'], {
        queryParams: {
          return: state.url,
        }
      });
    } else if (!this._userState.IsAuthenticated) {
      return this._userService.loginWithToken();
    }
    return this._userState.IsAuthenticated;
  }
}
