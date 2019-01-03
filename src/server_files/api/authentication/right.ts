import {CrudApi}         from '../../../repositories/base/api';
import {RightRepository} from '../../../repositories/right.repository';
import {User}            from '../../../models/user';
import {Right}           from '../../../models/right';

const REPO = new RightRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [User, Right]
};

export const GET = (req, res, next) => API.call(req, res, next, API.exportableApi.GET, ['READ_RIGHT']);
export const POST = (req, res, next) => API.call(req, res, next, API.exportableApi.POST, ['CREATE_RIGHT']);
export const PUT = (req, res, next) => API.call(req, res, next, API.exportableApi.PUT, ['UPDATE_RIGHT']);
export const DELETE = (req, res, next) => API.call(req, res, next, API.exportableApi.DELETE, ['DELETE_RIGHT']);
