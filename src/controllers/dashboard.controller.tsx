import { Hono } from 'hono';
import { getCookie } from 'hono/cookie';
import { OrderService } from '../modules/orders/order.service.ts';
import { DashboardPage } from '../components/pages/DashboardPage.tsx';
import { orderToOrderCardProps } from '../mappers/order.mapper.ts';
import { loadDrawerScript } from '../core/scripts/loadUiScripts.ts';

export const createDashboardController = (orderService: OrderService) => {
  const app = new Hono();

  // Rota: GET /dashboard/my-orders
  app.get('/my-orders', async (c) => {
    // 1. Lógica de Segurança (Idealmente isso vira um middleware no futuro)
    const authToken = getCookie(c, 'auth_token');
    if (!authToken) {
        return c.redirect('/auth/login');
    }

    // 2. Busca de Dados
    // TODO: Pegar o userId real do token decodificado em vez de 'user_123'
    const orders = await orderService.getUserOrders('user_123');
    const drawerScript = loadDrawerScript();

    // 3. Transformação (ViewModel)
    const ordersView = orders.map(orderToOrderCardProps);

    // 4. Renderização Pura
    return c.html(
      <DashboardPage orders={ordersView} isAuthenticated={true} drawerScript={drawerScript} />
    );
  });

  return app;
};