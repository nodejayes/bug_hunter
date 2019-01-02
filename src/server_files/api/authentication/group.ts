import {CrudApi}         from '../../../repositories/base/api';
import {GroupRepository} from '../../../repositories/group.repository';
import {Group}           from '../../../models/group';

const REPO = new GroupRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [Group]
};

export const GET = (req, res, next) => {
  if (req.hasRight('READ_GROUP')) {
    API.exportableApi.GET(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right READ_GROUP');
  }
};
export const POST = (req, res, next) => {
  if (req.hasRight('CREATE_GROUP')) {
    API.exportableApi.POST(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right CREATE_GROUP');
  }
};
export const PUT = (req, res, next) => {
  if (req.hasRight('UPDATE_GROUP')) {
    API.exportableApi.PUT(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right UPDATE_GROUP');
  }
};
export const DELETE = (req, res, next) => {
  if (req.hasRight('DELETE_GROUP')) {
    API.exportableApi.DELETE(req, res, next);
  } else {
    res.statusCode = 403;
    res.end('missing Right DELETE_GROUP');
  }
};
