import {CrudApi}         from '../../../repositories/base/api';
import {Group}           from '../../../models/group';
import {User}            from '../../../models/user';
import {RightRepository} from '../../../repositories/right.repository';

const REPO = new RightRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [{model: Group, include: [User]}]
};

export const GET = (req, res, next) => {
  if (req.hasRight('READ_RIGHT')) {
    API.exportableApi.GET_BY_ID(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right READ_RIGHT');
  }
};
