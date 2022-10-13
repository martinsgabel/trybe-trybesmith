import { Order } from '../interfaces';
import connection from '../models/connection';
import OrdersM from '../models/OrdersM.model';

export default class OrdersS {
  model: OrdersM;

  constructor() {
    this.model = new OrdersM(connection);
  }

  async AllOrders(): Promise<Order[]> {
    const res = await this.model.AllOrders();
    return res;
  }
}