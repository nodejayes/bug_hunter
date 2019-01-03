import {User}           from '../models/user';
import {CrudRepository} from './base/crud';
import {Group}          from '../models/group';
import {Right}          from '../models/right';
import {Project}        from '../models/project';

/**
 * handle the Data Access of User
 */
export class UserRepository extends CrudRepository<User> {
  constructor() {
    super(User);
  }

  /**
   * add a User to a Group
   * @param user the User Instance
   * @param group the Group Instance
   */
  async addGroup(user: User, group: Group) {
    user.GroupId = group.Id;
    await user.save({validate: true, returning: true});
  }

  async addProjects(user: User, projects: Project[]) {
    for (const project of projects) {
      await user['addProject'](project);
    }
    await user.save({returning: true});
  }

  async removeProjects(user: User, projects: Project[]) {
    for (const project of projects) {
      await user['removeProject'](project);
    }
    await user.save({returning: true});
  }

  /**
   * looking for a User by UserName and Password
   * @param userName the Login Name of a User
   * @param password the Password Hash for the User
   */
  async getUserByLoginData(userName: string, password: string): Promise<User> {
    const foundUser = (await User.findAll({
      include: [{model: Group, include: [Right]}],
      where:{UserName: userName, Password: password},
      limit: 1}))[0];
    if (!foundUser) {
      throw new Error(`can not find user: ${userName}`);
    }
    return foundUser;
  }
}
