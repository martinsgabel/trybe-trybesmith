import { Pool, RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class OrdersM {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async AllOrders(): Promise<Order[]> {
    const [res] = await this.connection
      .execute<RowDataPacket[]>(`SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId,
      JSON_ARRAYAGG(Trybesmith.Products.id) AS productsIds
      FROM Trybesmith.Orders INNER JOIN Trybesmith.Products
      ON Trybesmith.Orders.id = Trybesmith.Products.orderId
      GROUP BY Trybesmith.Orders.id
      ORDER BY Trybesmith.Orders.userId`);
    return res as Order[];
  }
}