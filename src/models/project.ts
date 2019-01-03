import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DefaultScope,
  Model,
  PrimaryKey,
  Sequelize,
  Table
}                     from 'sequelize-typescript';
import {User}         from './user';
import {ProjectUsers} from './project_users';
import {IProject}     from '../../shared/models/project';

@DefaultScope({})
@Table({})
export class Project extends Model<Project> implements IProject {
  @PrimaryKey
  @AutoIncrement
  @Column
  Id: number;

  @Column({type: Sequelize.STRING(100), validate: {len: [3, 100]}})
  Title: string;

  @BelongsToMany(() => User, {through: () => ProjectUsers})
  Users: User[];
}
