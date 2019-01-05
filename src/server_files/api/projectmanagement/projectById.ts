import {CrudApi}           from '../../../repositories/base/api';
import {ProjectRepository} from '../../../repositories/project.repository';
import {User}              from '../../../models/user';

const REPO = new ProjectRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [User]
};

export const GET = (req, res, next) => API.call(req, res, next, API.exportableApi.GET_BY_ID, ['READ_USER', 'READ_PROJECT']);
