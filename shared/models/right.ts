import {IGroup} from './group';

export interface IRight {
  Id: number;
  Title: string;
  Groups?: IGroup[];
}
