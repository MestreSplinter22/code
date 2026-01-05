// src/components/pages/DashboardPage.tsx
import { MainTemplate } from '../templates/MainTemplate.tsx';
import { OrderList } from '../organisms/OrderList.tsx';
import { Order } from '../../modules/orders/order.entity.ts';
import { OrderCardProps } from '../molecules/OrderCard.tsx';

interface DashboardPageProps {
  orders: Order[];
  isAuthenticated: boolean;
}

const orderToOrderCardProps = (order: Order): OrderCardProps => ({
  id: order.id,
  status: order.status,
  purchaseDate: order.purchaseDate,
  price: order.price,
  productName: order.productName,
  credentials: {
    accessLogin: order.credentials.accessLogin,
    accessPass: order.credentials.accessPass,
    backupCode: order.credentials.backupCode,
  }
});

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