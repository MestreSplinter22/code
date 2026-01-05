// main.ts
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { ProductRepository } from './src/modules/products/product.repository.ts'; // 1. Importe o Repository
import { ProductService } from './src/modules/products/product.service.ts';
import { createAppRouter } from './src/routes/app.routes.ts';

const app = new Hono();

app.use('*', logger());

// --- INÍCIO DA CORREÇÃO ---

// 2. Crie o "Banco de Dados" (Repository)
const productRepository = new ProductRepository();

// 3. Injete o Repository dentro do Service
const productService = new ProductService(productRepository);

// --- FIM DA CORREÇÃO ---

// 4. Passe o service pronto para as rotas
const appRouter = createAppRouter(productService);
app.route('/', appRouter);

console.log('🚀 Server running on http://localhost:8000');
Deno.serve({ port: 8000 }, app.fetch);