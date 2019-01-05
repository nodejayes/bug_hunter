import { Injectable }            from '@angular/core';
import {UserState}               from '../states/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment}             from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverApi = environment.serverApi;
  tokenName = environment.tokenName;

  constructor(private _http: HttpClient,
              private _userState: UserState) {
  }

  get<T>(path: string, params: {[key: string]: string} = {}) {
    return this._http.get<T>(this._getUrl(path, params), {
      headers: this._getHeader()
    });
  }

  post<T, K>(path: string, body: K, params: {[key: string]: string} = {}) {
    return this._http.post<T>(this._getUrl(path, params), body, {
      headers: this._getHeader()
    });
  }

  put<T>(path: string, body: any, params: {[key: string]: string} = {}) {
    return this._http.put<T>(this._getUrl(path, params), body, {
      headers: this._getHeader()
    });
  }

  delete<T>(path: string, params: {[key: string]: string} = {}) {
    return this._http.delete<T>(this._getUrl(path, params), {
      headers: this._getHeader()
    });
  }

  private _getHeader() {
    return this._userState.AccessToken ? new HttpHeaders({
      [this.tokenName]: this._userState.AccessToken,
    }) : null;
  }

  private _getUrl(path: string, params: {[key: string]: string} = {}): string {
    return `${this.serverApi}/${path}${this._convertParams(params)}`;
  }

  private _convertParams(params: {[key: string]: string} = {}): string {
    const tmp = [];
    for (const key of Object.keys(params)) {
      const PARSED_VALUE = typeof params[key] === typeof '' || typeof params[key] === typeof 0 ? params[key] : JSON.stringify(params[key]);
      tmp.push(`${encodeURI(key)}=${encodeURI(PARSED_VALUE)}`);
    }
    return tmp.length < 1 ? '' : `?${tmp.join('&')}`;
  }
}
