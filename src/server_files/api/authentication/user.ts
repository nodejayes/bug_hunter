import {UserRepository} from '../../../repositories/user.repository';
import {CrudApi}        from '../../../repositories/base/api';
import {Group}          from '../../../models/group';

const REPO = new UserRepository();
const API = new CrudApi(REPO);
const {GET, POST, PUT, DELETE} = API.exportableApi;

REPO.ReadOptions = {
  include: [Group]
};

export {GET, POST, PUT, DELETE};
