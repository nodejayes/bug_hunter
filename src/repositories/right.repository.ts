import {CrudRepository} from './base/crud';
import {Right}          from '../models/right';
import {Group}          from '../models/group';

/**
 * handles the Data Access for Right
 */
export class RightRepository extends CrudRepository<Right> {
  constructor(private _saveOptions = {validate: true, returning: true}) {
    super(Right);
  }

  /**
   * add a Right to a List of Groups
   * @param right the Right instance
   * @param groups a List of Group instances
   */
  async addToGroup(right: Right, groups: Group[]) {
    for (const group of groups) {
      await right[`addGroup`](group);
    }
    await right.save(this._saveOptions);
  }

  /**
   * remove a Right from a List of Groups
   * @param right the Right instance
   * @param groups a List of Group instances
   */
  async removeFromGroup(right: Right, groups: Group[]) {
    for (const group of groups) {
      await right[`removeGroup`](group);
    }
    await right.save(this._saveOptions);
  }
}
