// src/components/pages/DashboardPage.tsx
import { MainTemplate } from '../templates/MainTemplate.tsx';
import { OrderList } from '../organisms/OrderList.tsx';
import { Order } from '../../modules/orders/order.entity.ts';
import { OrderCardProps } from '../molecules/OrderCard.tsx';
import { orderToOrderCardProps } from '../../mappers/order.mapper.ts';

interface DashboardPageProps {
  orders: Order[];
  isAuthenticated: boolean;
}

export const DashboardPage = ({ orders, isAuthenticated }: DashboardPageProps) => {
  const orderCardProps: OrderCardProps[] = orders.map(orderToOrderCardProps);

  return (
    <MainTemplate 
      pageTitle="Meus Pedidos - Adsly"
      headerTitle="Meus Pedidos e Acessos"
      isAuthenticated={isAuthenticated}
    >
        <OrderList orders={orderCardProps} />
    </MainTemplate>
  );
};