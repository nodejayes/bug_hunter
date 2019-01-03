import {IUser}  from './user';
import {IRight} from './right';

export interface IGroup {
  Id: number;
  Title: string;
  Users?: IUser[];
  Rights?: IRight[];
}
