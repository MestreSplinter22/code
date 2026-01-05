import { Hono } from 'hono';
import { getCookie } from 'hono/cookie';
import { Layout } from '../components/templates/Layout.tsx';
import { Navbar } from '../components/organisms/Navbar.tsx';
import { OrderService } from '../modules/orders/order.service.ts';

export const createDashboardController = (orderService: OrderService) => {
  const app = new Hono();

  app.get('/my-orders', async (c) => {
    // 1. Segurança Simples via Cookie (Middleware seria o ideal em prod)
    const isAuthenticated = getCookie(c, 'auth_token');
    if (!isAuthenticated) {
        return c.redirect('/auth/login');
    }

    // 2. Busca dados
    const orders = await orderService.getUserOrders('user_123');

    return c.html(
      <Layout title="Meus Pedidos - Adsly">
        <Navbar />
        <div class="max-w-7xl mx-auto px-4 py-12">
            <h1 class="text-3xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-4">
                Meus Pedidos e Acessos
            </h1>

            <div class="grid gap-6">
                {orders.map(order => (
                    <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition">
                        {/* Header do Pedido */}
                        <div class="bg-zinc-950/50 p-4 border-b border-zinc-800 flex flex-wrap justify-between items-center gap-4">
                            <div class="flex items-center gap-4">
                                <span class="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded text-xs font-bold">
                                    {order.status === 'approved' ? 'PAGAMENTO APROVADO' : 'PENDENTE'}
                                </span>
                                <span class="text-zinc-400 text-sm">Pedido {order.id}</span>
                                <span class="text-zinc-500 text-sm">• {order.purchaseDate}</span>
                            </div>
                            <div class="text-white font-bold">R$ {order.price.toFixed(2)}</div>
                        </div>

                        <div class="p-6">
                            <h3 class="text-xl font-bold text-white mb-4">{order.productName}</h3>
                            
                            {/* Área de Credenciais (Estilo Cofre) */}
                            <div class="bg-black/40 rounded-lg p-4 border border-zinc-800 relative">
                                <div class="absolute -top-3 left-4 bg-zinc-800 text-zinc-300 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                                    Dados de Acesso
                                </div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <label class="block text-xs text-zinc-500 mb-1">Login / Usuário</label>
                                        <div class="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-yellow-500 font-mono text-sm select-all">
                                            {order.credentials.accessLogin}
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-xs text-zinc-500 mb-1">Senha</label>
                                        <div class="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white font-mono text-sm select-all">
                                            {order.credentials.accessPass}
                                        </div>
                                    </div>
                                </div>
                                
                                {order.credentials.backupCode && (
                                    <div class="mt-3 pt-3 border-t border-zinc-800/50">
                                         <label class="block text-xs text-zinc-500 mb-1">Código de Backup / 2FA</label>
                                         <span class="text-zinc-400 font-mono text-sm tracking-widest">{order.credentials.backupCode}</span>
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