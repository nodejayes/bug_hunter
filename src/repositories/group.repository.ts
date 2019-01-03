import {CrudRepository} from './base/crud';
import {Group}          from '../models/group';
import {User}           from '../models/user';
import {Right}          from '../models/right';

/**
 * Repository to handle the Data Access to Groups
 */
export class GroupRepository extends CrudRepository<Group> {
  constructor() {
    super(Group);
  }

  /**
   * set or change the Users Group
   * @param user the user instance
   * @param group the group instance
   */
  async addUser(user: User, group: Group) {
    user.GroupId = group.Id;
    await user.save({validate: true, returning: true});
  }

  /**
   * add a List of Rights to a Group
   * @param group the Group Instance
   * @param rights a List of Right instances
   */
  async addRights(group: Group, rights: Right[]) {
    for (const right of rights) {
      await group[`addRight`](right);
    }
    await group.save({validate: true, returning: true});
  }

  /**
   * remove a Right from Group
   * @param group the Group Instance
   * @param rights a List of right Instances
   */
  async removeRights(group: Group, rights: Right[]) {
    for (const right of rights) {
      await group[`removeRight`](right);
    }
    await group.save({validate: true, returning: true});
  }
}
