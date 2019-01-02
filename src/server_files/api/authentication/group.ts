import {CrudApi}         from '../../../repositories/base/api';
import {GroupRepository} from '../../../repositories/group.repository';
import {Group}           from '../../../models/group';

const REPO = new GroupRepository();
const API = new CrudApi(REPO);
const {GET, POST, PUT, DELETE} = API.exportableApi;

REPO.ReadOptions = {
  include: [Group]
};

export {GET, POST, PUT, DELETE};
