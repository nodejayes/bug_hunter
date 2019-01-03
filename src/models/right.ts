import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DefaultScope,
  Model,
  PrimaryKey,
  Sequelize,
  Table
}                    from 'sequelize-typescript';
import {Group}       from './group';
import {GroupRights} from './group_rights';
import {IRight}      from '../../shared/models/right';

@DefaultScope({})
@Table({})
export class Right extends Model<Right> implements IRight {
  @AutoIncrement
  @PrimaryKey
  @Column
  Id: number;

  @Column({type: Sequelize.STRING(50), validate: {len: [3, 50]}})
  Title: string;

  @BelongsToMany(() => Group, {through: () => GroupRights})
  Groups: Group[];
}
