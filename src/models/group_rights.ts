import {DefaultScope, ForeignKey, Model, Table} from 'sequelize-typescript';
import {Group}                                              from './group';
import {Right}                                              from './right';

@DefaultScope({})
@Table({})
export class GroupRights extends Model<GroupRights> {
  @ForeignKey(() => Group)
  GroupId: number;

  @ForeignKey(() => Right)
  RightId: number;
}
