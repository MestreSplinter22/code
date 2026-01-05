// src/components/pages/DashboardPage.tsx
import { MainTemplate } from '../templates/MainTemplate.tsx';
import { OrderList } from '../organisms/OrderList.tsx';
import { OrderCardProps } from '../molecules/orders/OrderCard.tsx';

interface DashboardPageProps {
  orders: OrderCardProps[];
  isAuthenticated: boolean;
  drawerScript?: string;
}

export const DashboardPage = ({ orders, isAuthenticated, drawerScript }: DashboardPageProps) => {
  return (
    <MainTemplate 
      pageTitle="Meus Pedidos - Adsly"
      headerTitle="Meus Pedidos e Acessos"
      isAuthenticated={isAuthenticated}
      drawerScript={drawerScript}
    >
        <OrderList orders={orders} />
    </MainTemplate>
  );
};
