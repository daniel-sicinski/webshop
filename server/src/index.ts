// import { ProductDao } from './product/ProductDao';

// const dao = new ProductDao();

// (async () => {
//   const res = await dao.getProductsByCategory(1);
//   console.log(res);
// })();

import express from 'express';
import productRouter from './product';

const app = express();

app.use('/api/v1/products', productRouter);

app
  .listen(process.env.WEBSERVER_PORT || 3001)
  .on('listening', () =>
    console.log('Server started on port: ' + process.env.WEBSERVER_PORT || 3001)
  )
  .on('error', (e) => console.log(e.stack));
