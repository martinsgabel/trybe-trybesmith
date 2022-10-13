import jwt from 'jsonwebtoken';
import { Token, User } from '../interfaces';
import connection from '../models/connection';
import UsersM from '../models/UsersM.model';
import { secret, config } from '../middlewares/jwtConfig';
import ErrorCustom from '../helper/ErrorCustom';

export default class UsersS {
  model: UsersM;

  constructor() {
    this.model = new UsersM(connection);
  }

  async newUser(info: User): Promise<Token> {
    const res = await this.model.newUser(info);

    const token = jwt.sign({ res }, secret, config);
    return { token };
  }

  async checkUser(username: string, password: string): Promise<User | void> {
    if (!username) throw new ErrorCustom('"username" is required', 400);

    if (!password) throw new ErrorCustom('"password" is required', 400);

    const user = await this.model.checkUser(username, password);

    if (!user) throw new ErrorCustom('Username or password invalid', 401);

    return user;
  }

  async loginUser(username: string, password: string): Promise<Token> {
    const user = await this.model.checkUser(username, password);

    const token = jwt.sign({ user }, secret, config);
    return { token };
  }
}