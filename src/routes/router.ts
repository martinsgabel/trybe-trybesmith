import { Router } from 'express';
import ProductsC from '../controller/Products.controller';
import OrdersC from '../controller/OrdersC.controller';
import UsersC from '../controller/UsersC.controller';

const routers = Router();
const productsC = new ProductsC();
const ordersC = new OrdersC();
const usersC = new UsersC();

routers.get('/products', productsC.AllProducts);
routers.post('/products', productsC.AddProducts);
routers.get('/orders', ordersC.AllOrders);
routers.post('/users', usersC.newUser);
routers.post('/login', usersC.loginUser);

export default routers;