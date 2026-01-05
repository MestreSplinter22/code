import { Layout } from '../templates/Layout.tsx';
import { Navbar } from '../organisms/Navbar.tsx';
import { OrderCard } from '../molecules/OrderCard.tsx';
import { Order } from '../../modules/orders/order.entity.ts';

interface DashboardPageProps {
  orders: Order[];
  isAuthenticated: boolean;
}

export const DashboardPage = ({ orders, isAuthenticated }: DashboardPageProps) => {
  return (
    <Layout title="Meus Pedidos - Adsly" isAuthenticated={isAuthenticated}>
      <Navbar isAuthenticated={isAuthenticated} />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-4">
            Meus Pedidos e Acessos
        </h1>

        <div className="grid gap-6">
            {orders.length > 0 ? (
              orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))
            ) : (
              <p className="text-gray-400">Nenhum pedido encontrado.</p>
            )}
        </div>
      </div>
    </Layout>
  );
};