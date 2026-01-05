import { Layout } from '../templates/Layout.tsx';
import { Navbar } from '../organisms/Navbar.tsx';
import { Button } from '../atoms/Button.tsx';
import { Icon } from '../atoms/Icon.tsx';
import { CartItem } from '../molecules/CartItem.tsx'; // Importado
// Mock temporário para tipagem, idealmente viria do Controller
import { Product } from '../../modules/products/product.entity.ts'; 

interface CartPageProps {
  isAuthenticated: boolean;
  // Adicionaremos items aqui futuramente
}

export const CartPage = ({ isAuthenticated }: CartPageProps) => {
    
  // Mock de um produto para visualização (simulando o que viria do banco)
  const mockItem: Product = {
      id: 'mock-1',
      title: 'BM Reestabelecida 🇧🇷',
      category: 'Meta',
      price: 139.90,
      status: 'available',
      imageUrl: '' // Adicione uma URL válida ou trate vazio no componente
  };

  return (
    <Layout title="Meu Carrinho - Adsly" isAuthenticated={isAuthenticated}>
      <Navbar isAuthenticated={isAuthenticated} />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-4">
            Seu Carrinho de Compras
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de Itens */}
            <div className="lg:col-span-2 space-y-4">
                {isAuthenticated ? (
                   <>
                     {/* REUTILIZAÇÃO DA MOLÉCULA AQUI */}
                     <CartItem 
                        product={mockItem} 
                        onRemove={(id) => console.log('Remover', id)} 
                     />
                     {/* Fim da Reutilização */}
                   </>
                ) : (
                    <div className="text-center py-12 bg-zinc-900/50 rounded-xl border border-zinc-800 border-dashed">
                        <Icon name="cart" className="w-12 h-12 text-gray-600 mx-auto mb-4"/>
                        <p className="text-gray-400">Seu carrinho está vazio ou você não está logado.</p>
                    </div>
                )}
            </div>

            {/* Resumo (Sidebar) */}
            <div className="lg:col-span-1">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sticky top-24">
                    <h3 className="text-xl font-bold text-white mb-4">Resumo</h3>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-gray-400">
                            <span>Subtotal</span>
                            <span>R$ 139,90</span>
                        </div>
                        <div className="h-px bg-zinc-800 my-2"></div>
                        <div className="flex justify-between text-white font-bold text-lg">
                            <span>Total</span>
                            <span className="text-yellow-500">R$ 139,90</span>
                        </div>
                    </div>

                    {isAuthenticated ? (
                        <Button fullWidth variant="primary">Finalizar Compra (Pix)</Button>
                    ) : (
                        <a href="/auth/login" className="block w-full">
                            <Button fullWidth variant="outline">Faça Login para Comprar</Button>
                        </a>
                    )}
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};