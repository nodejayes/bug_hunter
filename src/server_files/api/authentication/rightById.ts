import {CrudApi}         from '../../../repositories/base/api';
import {Group}           from '../../../models/group';
import {User}            from '../../../models/user';
import {RightRepository} from '../../../repositories/right.repository';

const REPO = new RightRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [{model: Group, include: [User]}]
};

export const GET = API.exportableApi.GET_BY_ID;
