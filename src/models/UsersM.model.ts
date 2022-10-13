import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UsersM {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async newUser(info: User): Promise<User> {
    const { username, classe, level, password } = info;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Users 
      (username, classe, level, password) VALUES(?, ?, ?, ?)`, [username, classe, level, password]);
    return { id: insertId, username, classe, level, password };
  }

  async checkUser(username: string, password: string): Promise<User> {
    const [[user]] = await this.connection
      .execute<(User & RowDataPacket)[]>(`SELECT * 
      WHERE username = ?
      AND password = ?`, [username, password]);
    return user as User;
  }
}