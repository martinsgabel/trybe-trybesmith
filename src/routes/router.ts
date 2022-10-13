import { Router } from 'express';
import ProductsC from '../controller/Products.controller';
import OrdersC from '../controller/OrdersC.controller';

const routers = Router();
const productsC = new ProductsC();
const ordersC = new OrdersC();

routers.get('/products', productsC.AllProducts);
routers.post('/products', productsC.AddProducts);
routers.get('/orders', ordersC.AllOrders);

export default routers;