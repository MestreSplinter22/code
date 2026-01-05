// src/components/organisms/OrderList.tsx
import { Order } from '../../modules/orders/order.entity.ts';
import { OrderCard } from '../molecules/OrderCard.tsx';

interface OrderListProps {
  orders: Order[];
}

export const OrderList = ({ orders }: OrderListProps) => {
  if (orders.length === 0) {
    // Poderia ser extraído para um átomo ou molécula "EmptyState" se reutilizado
    return (
      <div className="py-12 text-center border border-dashed border-zinc-800 rounded-lg">
        <p className="text-gray-400">Nenhum pedido encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};