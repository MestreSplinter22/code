import { Hono } from 'hono';
import { ProductService } from '../modules/products/product.service.ts';
import { OrderService } from '../modules/orders/order.service.ts';
import { AuthService } from '../modules/auth/auth.service.ts';

import { createHomeController } from '../controllers/home.controller.tsx';
import { createAuthController } from '../controllers/auth.controller.tsx';
import { createDashboardController } from '../controllers/dashboard.controller.tsx';

export const createAppRouter = (
    productService: ProductService,
    orderService: OrderService,
    authService: AuthService
) => {
  const app = new Hono();

  app.route('/', createHomeController(productService));
  
  // Passamos o authService para o controller
  app.route('/auth', createAuthController(authService));
  
  // Nova rota de dashboard
  app.route('/dashboard', createDashboardController(orderService));

  return app;
};