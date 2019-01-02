import {CrudApi}         from '../../../repositories/base/api';
import {RightRepository} from '../../../repositories/right.repository';
import {User}            from '../../../models/user';
import {Right}           from '../../../models/right';

const REPO = new RightRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [User, Right]
};

export const GET = (req, res, next) => {
  if (req.hasRight('READ_RIGHT')) {
    API.exportableApi.GET(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right READ_RIGHT');
  }
};
export const POST = (req, res, next) => {
  if (req.hasRight('CREATE_RIGHT')) {
    API.exportableApi.POST(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right CREATE_RIGHT');
  }
};
export const PUT = (req, res, next) => {
  if (req.hasRight('UPDATE_RIGHT')) {
    API.exportableApi.PUT(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right UPDATE_RIGHT');
  }
};
export const DELETE = (req, res, next) => {
  if (req.hasRight('DELETE_RIGHT')) {
    API.exportableApi.DELETE(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right DELETE_RIGHT');
  }
};
