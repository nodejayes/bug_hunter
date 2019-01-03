import {IUser} from './user';

export interface IProject {
  Id: number;
  Title: string;
  Users?: IUser[]
}
