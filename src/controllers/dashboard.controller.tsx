// src/controllers/dashboard.controller.tsx
import { Hono } from 'hono';
import { getCookie } from 'hono/cookie';
import { Layout } from '../components/templates/Layout.tsx';
import { Navbar } from '../components/organisms/Navbar.tsx';
import { OrderService } from '../modules/orders/order.service.ts';

export const createDashboardController = (orderService: OrderService) => {
  const app = new Hono();

  app.get('/my-orders', async (c) => {
    // 1. Verifica autenticação via Cookie
    const isAuthenticatedToken = getCookie(c, 'auth_token');
    
    // Proteção de Rota: Se não houver token, redireciona para login
    if (!isAuthenticatedToken) {
        return c.redirect('/auth/login');
    }

    // 2. Busca os pedidos (Simulando ID do usuário logado)
    const orders = await orderService.getUserOrders('user_123');

    return c.html(
      // Passamos isAuthenticated={true} para o Layout e Navbar
      <Layout title="Meus Pedidos - Adsly" isAuthenticated={true}>
        <Navbar isAuthenticated={true} />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-4">
                Meus Pedidos e Acessos
            </h1>

            <div className="grid gap-6">
                {orders.map(order => (
                    <div key={order.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition">
                        {/* Header do Card de Pedido */}
                        <div className="bg-zinc-950/50 p-4 border-b border-zinc-800 flex flex-wrap justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                                <span className={`px-3 py-1 rounded text-xs font-bold ${
                                    order.status === 'approved' 
                                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                                    : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                                }`}>
                                    {order.status === 'approved' ? 'PAGAMENTO APROVADO' : 'PENDENTE'}
                                </span>
                                <span className="text-zinc-400 text-sm">Pedido {order.id}</span>
                                <span className="text-zinc-500 text-sm">• {order.purchaseDate}</span>
                            </div>
                            <div className="text-white font-bold">R$ {order.price.toFixed(2)}</div>
                        </div>

                        {/* Detalhes e Credenciais */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-4">{order.productName}</h3>
                            <div className="bg-black/40 rounded-lg p-4 border border-zinc-800 relative">
                                <div className="absolute -top-3 left-4 bg-zinc-800 text-zinc-300 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                                    Dados de Acesso
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <label className="block text-xs text-zinc-500 mb-1">Login / Usuário</label>
                                        <div className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-yellow-500 font-mono text-sm select-all">
                                            {order.credentials.accessLogin}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-zinc-500 mb-1">Senha</label>
                                        <div className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white font-mono text-sm select-all">
                                            {order.credentials.accessPass}
                                        </div>
                                    </div>
                                </div>
                                {order.credentials.backupCode && (
                                    <div className="mt-3 pt-3 border-t border-zinc-800/50">
                                         <label className="block text-xs text-zinc-500 mb-1">Código de Backup / 2FA</label>
                                         <span className="text-zinc-400 font-mono text-sm tracking-widest">{order.credentials.backupCode}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </Layout>
    );
  });

  return app;
};