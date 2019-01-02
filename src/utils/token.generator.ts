import {sign, verify} from 'jsonwebtoken';
import {User}         from '../models/user';

const CURRENT_TOKENS: {[key: string]: ITokenCache} = {};

export interface ITokenCache {
  time: number;
  user: User;
}

export interface ITokenInfo {
  userId: number;
  time: number;
}

export class TokenGenerator {
  private _secret = 'da39a3ee5e6b4b0d3255bfef95601890afd80709';
  private _timeout = 2*60*60*1000;

  constructor() {}

  generate(info: ITokenInfo, user: User): string {
    const hash = sign(info, this._secret);
    CURRENT_TOKENS[hash] = {time: Date.now(), user};
    return hash;
  }

  verify(token: string): ITokenCache {
    const registredToken = CURRENT_TOKENS[token];
    if (!registredToken || isNaN(registredToken.time) || (Date.now() - registredToken.time) > this._timeout) {
      return null;
    }
    const info = <ITokenInfo>verify(token, this._secret);
    if (!info) {
      return null;
    }
    CURRENT_TOKENS[token].time = Date.now();
    return CURRENT_TOKENS[token];
  }
}
