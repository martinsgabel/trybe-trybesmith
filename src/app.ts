import express from 'express';
import errorHandler from './middlewares/ErrorHandler';
import routers from './routes/router';

const app = express();

app.use(express.json());
app.use(routers);
app.use(errorHandler);

export default app;
