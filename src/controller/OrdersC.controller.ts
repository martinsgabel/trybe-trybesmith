import { Request, Response } from 'express';
import OrdersS from '../service/OrdersS.service';

export default class OrdersC {
  service: OrdersS;

  constructor() {
    this.service = new OrdersS();
  }

  AllOrders = async (req: Request, res: Response) => {
    const result = await this.service.AllOrders();
    res.status(200).json(result);
  };
}