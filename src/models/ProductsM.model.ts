import { Pool } from 'mysql2/promise';
import { Product } from '../interfaces';

export default class ProductsM {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async AllProducts(): Promise<Product[]> {
    const res = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = res;
    return rows as Product[];
  }
}
