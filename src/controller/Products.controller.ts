import { Request, Response } from 'express';
import ProductsS from '../service/ProductsS.service';

export default class ProductsC {
  service: ProductsS;

  constructor() {
    this.service = new ProductsS();
  }

  AllProducts = async (req: Request, res: Response) => {
    const result = await this.service.AllProducts();
    res.status(200).json(result);
  };

  AddProducts = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const result = await this.service.AddProducts({ name, amount });
    res.status(201).json(result);
  };
}