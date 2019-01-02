import {
  AutoIncrement,
  BelongsTo,
  Column,
  DefaultScope,
  ForeignKey,
  Model,
  PrimaryKey,
  Sequelize,
  Table
} from 'sequelize-typescript';
import {Group}                                                                            from './group';

@DefaultScope({})
@Table({})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  Id: number;

  @Column({type: Sequelize.STRING(255), allowNull: false, validate: {len: [3, 255]}})
  UserName: string;

  @Column({type: Sequelize.STRING(255), allowNull: false})
  Password: string;

  @Column({type: Sequelize.STRING(50), validate: {len: [3, 50]}})
  FirstName: string;

  @Column({type: Sequelize.STRING(50), validate: {len: [3, 50]}})
  LastName: string;

  @Column({type: Sequelize.STRING(50), validate: {isEmail: true, len: [3, 50]}})
  Email: string;

  @ForeignKey(() => Group)
  GroupId: number;

  @BelongsTo(() => Group)
  Group: Group;
}
