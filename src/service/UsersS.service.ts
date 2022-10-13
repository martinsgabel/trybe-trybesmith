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
}