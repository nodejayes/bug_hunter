import {CrudApi}        from '../../../repositories/base/api';
import {UserRepository} from '../../../repositories/user.repository';
import {Group}          from '../../../models/group';
import {Right}          from '../../../models/right';

const REPO = new UserRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [
    {model: Group, include: [Right]}
  ]
};

export const GET = (req, res, next) => API.call(req, res, next, API.exportableApi.GET_BY_ID, ['READ_USER', 'READ_GROUP', 'READ_RIGHT']);
