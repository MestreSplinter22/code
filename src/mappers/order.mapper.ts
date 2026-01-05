import { Order } from '../modules/orders/order.entity.ts';
import { OrderCardProps } from '../components/molecules/orders/OrderCard.tsx';

export const orderToOrderCardProps = (order: Order): OrderCardProps => ({
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