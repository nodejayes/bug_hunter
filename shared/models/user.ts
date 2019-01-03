import {IGroup}   from './group';
import {IProject} from './project';

export interface IUser {
  Id: number;
  UserName: string;
  Password: string;
  Email: string;
  FirstName?: string;
  LastName?: string;
  GroupId: number;
  Group: IGroup;
  Projects?: IProject[];
}
