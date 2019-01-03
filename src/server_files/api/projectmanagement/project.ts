import {ProjectRepository} from '../../../repositories/project.repository';
import {CrudApi}           from '../../../repositories/base/api';
import {User}              from '../../../models/user';

const REPO = new ProjectRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [User]
};

export const GET = (req, res, next) => API.call(req, res, next, API.exportableApi.GET, ['READ_PROJECT']);
export const POST = (req, res, next) => API.call(req, res, next, API.exportableApi.POST, ['CREATE_PROJECT']);
export const PUT = (req, res, next) => API.call(req, res, next, API.exportableApi.PUT, ['UPDATE_PROJECT']);
export const DELETE = (req, res, next) => API.call(req, res, next, API.exportableApi.DELETE, ['DELETE_PROJECT']);
