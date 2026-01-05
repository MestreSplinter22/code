// src/components/pages/DashboardPage.tsx
import { MainTemplate } from '../templates/MainTemplate.tsx';
import { OrderList } from '../organisms/OrderList.tsx'; // O novo Organismo
import { Order } from '../../modules/orders/order.entity.ts';

interface DashboardPageProps {
  orders: Order[];
  isAuthenticated: boolean;
}

export const DashboardPage = ({ orders, isAuthenticated }: DashboardPageProps) => {
  return (
    <MainTemplate 
      pageTitle="Meus Pedidos - Adsly"
      headerTitle="Meus Pedidos e Acessos"
      isAuthenticated={isAuthenticated}
    >
        {/* Zero divs, zero classes, apenas injeção de componente */}
        <OrderList orders={orders} />
    </MainTemplate>
  );
};