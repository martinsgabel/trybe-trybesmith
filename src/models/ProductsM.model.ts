import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces';

export default class ProductsM {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async AllProducts(): Promise<Product[]> {
    const [res] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    return res as Product[];
  }

  async AddProducts(info: Product): Promise<Product> {
    const { name, amount } = info;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)
      `, [name, amount]);
    return { id: insertId, name, amount };
  }
}
