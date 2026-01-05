// src/components/pages/CartPage.tsx
import { Layout } from '../templates/Layout.tsx';
import { Navbar } from '../organisms/Navbar.tsx';
import { Button } from '../atoms/Button.tsx';
import { Icon } from '../atoms/Icon.tsx';

// Em um cenário real, receberíamos os itens do carrinho via props ou contexto
interface CartPageProps {
  isAuthenticated: boolean;
}

export const CartPage = ({ isAuthenticated }: CartPageProps) => {
  return (
    <Layout title="Meu Carrinho - Adsly" isAuthenticated={isAuthenticated}>
      <Navbar isAuthenticated={isAuthenticated} />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-4">
            Seu Carrinho de Compras
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de Itens (Coluna Esquerda - Maior) */}
            <div className="lg:col-span-2 space-y-4">
                {isAuthenticated ? (
                   <>
                     {/* Exemplo de Item (Molecule CartItem futuramente) */}
                     <div className="flex gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl items-center">
                        <div className="w-20 h-20 bg-zinc-950 rounded-lg flex items-center justify-center text-3xl border border-zinc-800">
                            🐳
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white">BM Reestabelecida 🇧🇷</h3>
                            <p className="text-sm text-gray-400">Categoria: Meta Ads</p>
                        </div>
                        <div className="text-right">
                            <div className="text-yellow-500 font-bold text-lg">R$ 139,90</div>
                            <button className="text-xs text-red-500 hover:text-red-400 hover:underline mt-1">
                                Remover
                            </button>
                        </div>
                     </div>
                     {/* Fim do Item */}
                   </>
                ) : (
                    <div className="text-center py-12 bg-zinc-900/50 rounded-xl border border-zinc-800 border-dashed">
                        <Icon name="cart" className="w-12 h-12 text-gray-600 mx-auto mb-4"/>
                        <p className="text-gray-400">Seu carrinho está vazio ou você não está logado.</p>
                    </div>
                )}
            </div>

            {/* Resumo do Pedido (Coluna Direita - Menor) */}
            <div className="lg:col-span-1">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sticky top-24">
                    <h3 className="text-xl font-bold text-white mb-4">Resumo</h3>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-gray-400">
                            <span>Subtotal</span>
                            <span>R$ 139,90</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <span>Descontos</span>
                            <span>- R$ 0,00</span>
                        </div>
                        <div className="h-px bg-zinc-800 my-2"></div>
                        <div className="flex justify-between text-white font-bold text-lg">
                            <span>Total</span>
                            <span className="text-yellow-500">R$ 139,90</span>
                        </div>
                    </div>

                    {isAuthenticated ? (
                        <Button fullWidth variant="primary">
                            Finalizar Compra (Pix)
                        </Button>
                    ) : (
                        <a href="/auth/login" className="block w-full">
                            <Button fullWidth variant="outline">
                                Faça Login para Comprar
                            </Button>
                        </a>
                    )}
                    
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        Ambiente Seguro
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};