import jwt from 'jsonwebtoken';
import { Token, User } from '../interfaces';
import connection from '../models/connection';
import UsersM from '../models/UsersM.model';
import { secret, config } from '../middlewares/jwtConfig';

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

  // async checkUser(username: string, password: string): Promise<void> {
  //   if (!username) return { status: 400, message: '"username" is required' };

  //   if (!password) return { status: 400, message: '"password" is required' };

  //   const user = await this.model.checkUser(username, password);

  //   if (!user) return { status: 401, message: 'Username or password invalid' };
  // }

  async loginUser(username: string, password: string): Promise<Token> {
    const user = await this.model.checkUser(username, password);

    const token = jwt.sign({ user }, secret, config);
    return { token };
  }
}