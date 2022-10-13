import { Router } from 'express';
import ProductsC from '../controller/Products.controller';

const routers = Router();
const productsC = new ProductsC();

routers.get('/products', productsC.AllProducts);

export default routers;