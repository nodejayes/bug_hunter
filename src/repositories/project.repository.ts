import {CrudRepository} from './base/crud';
import {Project}        from '../models/project';
import {User}           from '../models/user';

export class ProjectRepository extends CrudRepository<Project> {
  constructor() {
    super(Project);
  }

  async addUsers(project: Project, users: User[]) {
    for (const user of users) {
      await project['addUser'](user);
    }
    await project.save({validate: true, returning: true});
  }

  async removeUsers(project: Project, users: User[]) {
    for (const user of users) {
      await project['removeUser'](user);
    }
    await project.save({validate: true, returning: true});
  }
}
