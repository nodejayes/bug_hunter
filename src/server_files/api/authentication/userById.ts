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

export const GET = (req, res, next) => {
  if (req.hasRight('READ_USER')) {
    API.exportableApi.GET_BY_ID(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right READ_USER');
  }
};
