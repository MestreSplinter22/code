// src/controllers/dashboard.controller.tsx
import { Hono } from 'hono';
import { getCookie } from 'hono/cookie';
import { OrderService } from '../modules/orders/order.service.ts';
import { DashboardPage } from '../components/pages/DashboardPage.tsx';

export const createDashboardController = (orderService: OrderService) => {
  const app = new Hono();

  app.get('/my-orders', async (c) => {
    // 1. Lógica de Autenticação / Proteção de Rota
    const isAuthenticatedToken = getCookie(c, 'auth_token');
    
    if (!isAuthenticatedToken) {
        return c.redirect('/auth/login');
    }

    // 2. Busca de Dados (Camada de Serviço)
    const orders = await orderService.getUserOrders('user_123');

    // 3. Renderização (Delega para a View/Page)
    return c.html(
      <DashboardPage orders={orders} isAuthenticated={true} />
    );
  });

  return app;
};