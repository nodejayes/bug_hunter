import {GroupRepository} from "../../../repositories/group.repository";
import {CrudApi} from "../../../repositories/base/api";
import {User} from "../../../models/user";
import {Right} from "../../../models/right";

const REPO = new GroupRepository();
const API = new CrudApi(REPO);

REPO.ReadOptions = {
  include: [User, Right]
};

export const GET = (req, res, next) => API.call(req, res, next, API.exportableApi.GET_BY_ID, ['READ_GROUP', 'READ_USER', 'READ_RIGHT']);
