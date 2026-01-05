import { Hono } from 'hono';
import { logger } from 'hono/logger';

// 1. Imports dos Módulos
import { ProductRepository } from './src/modules/products/product.repository.ts';
import { ProductService } from './src/modules/products/product.service.ts';

import { OrderRepository } from './src/modules/orders/order.repository.ts';
import { OrderService } from './src/modules/orders/order.service.ts';

import { AuthService } from './src/modules/auth/auth.service.ts';

import { createAppRouter } from './src/routes/app.routes.ts';

const app = new Hono();
app.use('*', logger());

// 2. Instanciação dos Repositórios (Camada de Dados)
const productRepo = new ProductRepository();
const orderRepo = new OrderRepository();

// 3. Instanciação dos Serviços (Camada de Negócio)
const productService = new ProductService(productRepo);
const orderService = new OrderService(orderRepo);
const authService = new AuthService();

// 4. Criação das Rotas com Injeção de Dependência
const appRouter = createAppRouter(productService, orderService, authService);

app.route('/', appRouter);

console.log('🚀 Server running on http://localhost:8000');
Deno.serve({ port: 8000 }, app.fetch);