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
}
