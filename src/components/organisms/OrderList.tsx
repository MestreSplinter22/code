// src/components/organisms/OrderList.tsx
import { OrderCard, OrderCardProps } from '../molecules/orders/OrderCard.tsx';

interface OrderListProps {
  orders: OrderCardProps[];
}

export const OrderList = ({ orders }: OrderListProps) => {
  if (orders.length === 0) {
    return (
      <div className="py-12 text-center border border-dashed border-zinc-800 rounded-lg">
        <p className="text-gray-400">Nenhum pedido encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </div>
  );
};
