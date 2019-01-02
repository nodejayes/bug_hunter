import {CrudApi}         from '../../../repositories/base/api';
import {RightRepository} from '../../../repositories/right.repository';
import {User}            from '../../../models/user';
import {Right}           from '../../../models/right';

const REPO = new RightRepository();
const API = new CrudApi(REPO);
const {GET, POST, PUT, DELETE} = API.exportableApi;

REPO.ReadOptions = {
  include: [User, Right]
};

export {GET, POST, PUT, DELETE};
