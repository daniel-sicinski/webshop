import { Router } from 'express';
import { IProductService } from './ProductService';
import { productsQueryValidator } from './validators/productsQueryValidator';
import { errorCatcher } from '../utils/errorHandling/errorCatcher';

export class ProductController {
  private router = Router();

  constructor(private productService: IProductService) {
    this.router.get(
      '/',
      productsQueryValidator,
      errorCatcher(async (req, res) => {
        const products = await this.productService.getProducts(req.query);

        res.json(products);
      })
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
