// src/routes/app.routes.ts
import { Hono } from 'hono';
import { ProductService } from '../modules/products/product.service.ts';
import { createHomeController } from '../controllers/home.controller.tsx';
import { createAuthController } from '../controllers/auth.controller.tsx';


export const createAppRouter = (productService: ProductService) => {
  const app = new Hono();
  

  // Agrupamento de rotas
  app.route('/', createHomeController(productService));
  app.route('/auth', createAuthController());

  return app;
};