import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class OrdersM {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async AllOrders(): Promise<Order[]> {
    const res = await this.connection
      .execute('SELECT * FROM Trybesmith.Orders');
    const [rows] = res;
    return rows as Order[];
  }
}