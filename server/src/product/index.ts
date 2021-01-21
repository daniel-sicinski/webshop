import { ProductDao } from './ProductDao';
import { ProductService } from './ProductService';
import { ProductController } from './ProductController';

const productDao = new ProductDao();
const productService = new ProductService(productDao);
const productController = new ProductController(productService);

export default productController.getRouter();
