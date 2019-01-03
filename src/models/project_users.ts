import {DefaultScope, ForeignKey, Model, Table} from 'sequelize-typescript';
import {Project}                                from './project';
import {User}                                   from './user';

@DefaultScope({})
@Table({})
export class ProjectUsers extends Model<ProjectUsers>{
  @ForeignKey(() => Project)
  ProjectId: number;

  @ForeignKey(() => User)
  UserId: number;
}
