// src/controllers/home.controller.tsx
import { Hono } from 'hono';
import { getCookie } from 'hono/cookie';
import { ProductService } from '../modules/products/product.service.ts';
import { HomePage } from '../components/pages/HomePage.tsx';

export const createHomeController = (productService: ProductService) => {
  const app = new Hono();

  app.get('/', async (c) => {
    // 1. Busca de Dados (Camada de Serviço)
    const products = await productService.getAllProducts();

    // 2. Lógica de Autenticação (Lógica de Controle/Sessão)
    const authToken = getCookie(c, 'auth_token');
    const isAuthenticated = !!authToken;

    // 3. Renderização (Delegação para a View)
    return c.html(
      <HomePage products={products} isAuthenticated={isAuthenticated} />
    );
  });

  return app;
};