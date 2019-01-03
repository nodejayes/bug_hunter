import {UserRepository} from '../../../repositories/user.repository';
import {CrudApi}        from '../../../repositories/base/api';
import {Group}          from '../../../models/group';

const REPO = new UserRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [Group]
};

export const GET = (req, res, next) => API.call(req, res, next, API.exportableApi.GET, ['READ_USER']);
export const POST = (req, res, next) => API.call(req, res, next, API.exportableApi.POST, ['CREATE_USER']);
export const PUT = (req, res, next) => API.call(req, res, next, API.exportableApi.PUT, ['UPDATE_USER']);
export const DELETE = (req, res, next) => API.call(req, res, next, API.exportableApi.DELETE, ['DELETE_USER']);
