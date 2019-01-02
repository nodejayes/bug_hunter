import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DefaultScope,
  HasMany,
  Model,
  PrimaryKey,
  Sequelize,
  Table
} from 'sequelize-typescript';
import {User}                                                                              from './user';
import {Right}                                                                             from './right';
import {GroupRights}                                                                       from './group_rights';

@DefaultScope({})
@Table({})
export class Group extends Model<Group> {
  @AutoIncrement
  @PrimaryKey
  @Column
  Id: number;

  @Column({type: Sequelize.STRING(50), validate: {len: [3, 255]}})
  Title: string;

  @HasMany(() => User)
  Users: User[];

  @BelongsToMany(() => Right, {through: () => GroupRights})
  Rights: Right[];
}
