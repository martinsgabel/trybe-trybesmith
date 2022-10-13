import { Product } from '../interfaces';
import connection from '../models/connection';
import ProductsM from '../models/ProductsM.model';

export default class ProductsS {
  model: ProductsM;

  constructor() {
    this.model = new ProductsM(connection);
  }

  async AllProducts(): Promise<Product[]> {
    const res = await this.model.AllProducts();
    return res;
  }
}