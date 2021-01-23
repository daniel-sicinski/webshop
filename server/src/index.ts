import express from 'express';
import productRouter from './product';
import { globalErrorHandler } from './utils/errorHandling/globalErrorHandler';

const app = express();

app.use('/api/v1/products', productRouter);

app.use(globalErrorHandler);

app
  .listen(process.env.WEBSERVER_PORT || 3001)
  .on('listening', () =>
    console.log('Server started on port: ' + process.env.WEBSERVER_PORT || 3001)
  )
  .on('error', (e) => console.log(e.stack));
