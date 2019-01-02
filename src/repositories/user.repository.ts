import {User}           from '../models/user';
import {CrudRepository} from './base/crud';
import {Group}          from '../models/group';

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
  async addToGroup(user: User, group: Group) {
    user.GroupId = group.Id;
    await user.save({validate: true, returning: true});
  }

  /**
   * looking for a User by UserName and Password
   * @param userName the Login Name of a User
   * @param password the Password Hash for the User
   */
  async getUserByLoginData(userName: string, password: string): Promise<User> {
    const foundUser = (await this.readAll({where:{UserName: userName, Password: password}, limit: 1}))[0];
    if (!foundUser) {
      throw new Error(`can not find user: ${userName}`);
    }
    return foundUser;
  }
}
