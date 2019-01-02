import {UserRepository} from '../../../repositories/user.repository';

const REPOSITORY = new UserRepository();

export async function GET(req, res, next) {
  if (!req.parameter) {
    res.statusCode = 500;
    res.send(`missing login parameter`);
    return;
  }
  const USER_NAME = req.parameter.username;
  const PASSWORD = req.parameter.password;
  const USER = await REPOSITORY.getUserByLoginData(USER_NAME, PASSWORD);
  next(USER);
}
