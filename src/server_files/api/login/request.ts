import {UserRepository} from '../../../repositories/user.repository';
import {TokenGenerator} from '../../../utils/token.generator';
import {ILoginResult}   from '../../../../shared/communication/login-result';

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
  next(<ILoginResult>{
    token: TOKEN,
    user: USER,
  });
}
