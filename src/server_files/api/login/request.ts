import {UserRepository} from '../../../repositories/user.repository';
import {TokenGenerator} from '../../../utils/token.generator';
import {Group}          from '../../../models/group';
import {Right}          from '../../../models/right';

const REPOSITORY = new UserRepository();
const TOKEN_GENERATOR = new TokenGenerator();

export async function GET(req, res, next) {
  if (!req.parameter) {
    res.statusCode = 500;
    res.end(`missing login parameter`);
    return;
  }
  const USER_NAME = req.parameter.username;
  const PASSWORD = req.parameter.password;
  const USER = await REPOSITORY.getUserByLoginData(USER_NAME, PASSWORD);
  const TOKEN = TOKEN_GENERATOR.generate({
    userId: USER.Id,
    time: Date.now(),
  }, USER);
  next({
    token: TOKEN,
    user: USER,
  });
}
