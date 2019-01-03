import {CrudApi}         from '../../../repositories/base/api';
import {GroupRepository} from '../../../repositories/group.repository';
import {Group}           from '../../../models/group';

const REPO = new GroupRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [Group]
};

export const GET = (req, res, next) => API.call(req, res, next, API.exportableApi.GET, ['READ_GROUP']);
export const POST = (req, res, next) => API.call(req, res, next, API.exportableApi.POST, ['CREATE_GROUP']);
export const PUT = (req, res, next) => API.call(req, res, next, API.exportableApi.PUT, ['UPDATE_GROUP']);
export const DELETE = (req, res, next) => API.call(req, res, next, API.exportableApi.DELETE, ['DELETE_GROUP']);
