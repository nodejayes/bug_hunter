import {UserRepository} from '../../../repositories/user.repository';
import {CrudApi}        from '../../../repositories/base/api';
import {Group}          from '../../../models/group';

const REPO = new UserRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [Group]
};

export const GET = (req, res, next) => {
  if (req.hasRight('READ_USER')) {
    API.exportableApi.GET(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right READ_USER');
  }
};
export const POST = (req, res, next) => {
  if (req.hasRight('CREATE_USER')) {
    API.exportableApi.POST(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right CREATE_USER');
  }
};
export const PUT = (req, res, next) => {
  if (req.hasRight('UPDATE_USER')) {
    API.exportableApi.PUT(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right UPDATE_USER');
  }
};
export const DELETE = (req, res, next) => {
  if (req.hasRight('DELETE_USER')) {
    API.exportableApi.DELETE(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right DELETE_USER');
  }
};
