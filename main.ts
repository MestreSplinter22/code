// main.ts
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { ProductService } from './src/modules/products/product.service.ts';
import { createHomeController } from './src/controllers/home.controller.tsx';
import { createAuthController } from './src/controllers/auth.controller.tsx'; // Novo import

const app = new Hono();

app.use('*', logger());

// Serviços
const productService = new ProductService();

// Rotas
app.route('/', createHomeController(productService));
app.route('/auth', createAuthController()); // Registra /auth/login e /auth/register

console.log('🚀 Server running on http://localhost:8000');

Deno.serve({ port: 8000 }, app.fetch);