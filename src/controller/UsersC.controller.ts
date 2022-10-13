import { Request, Response } from 'express';
import UsersS from '../service/UsersS.service';

export default class UsersC {
  service: UsersS;

  constructor() {
    this.service = new UsersS();
  }

  newUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const token = await this.service.newUser({ username, classe, level, password });
    res.status(201).json(token);
  };
}