import {IUser} from '../models/user';

export interface ILoginResult {
  token: string;
  user: IUser
}
