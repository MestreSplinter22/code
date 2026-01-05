// src/components/organisms/CartDrawer.tsx
import { Button } from '../atoms/Button.tsx';
import { Icon } from '../atoms/Icon.tsx';
import { CartItem } from '../molecules/CartItem.tsx';
import { Product } from '../../modules/products/product.entity.ts';

interface CartDrawerProps {
  isAuthenticated: boolean;
  items?: Product[]; // Recebe itens via props
}

export const CartDrawer = ({ isAuthenticated, items = [] }: CartDrawerProps) => {
  // Mock de total para exemplo (num app real viria calculado)
  const total = items.reduce((acc, item) => acc + item.price, 0);

  const scriptToggle = `
    function toggleCart() {
      const drawer = document.getElementById('cart-drawer');
      const overlay = document.getElementById('cart-overlay');
      if (!drawer || !overlay) return;
      
      if (drawer.classList.contains('translate-x-full')) {
        // Abrir
        overlay.classList.remove('hidden');
        // Pequeno delay para permitir a transição de opacidade
        setTimeout(() => {
           overlay.classList.remove('opacity-0');
           drawer.classList.remove('translate-x-full');
        }, 10);
        document.body.style.overflow = 'hidden';
      } else {
        // Fechar
        drawer.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => {
           overlay.classList.add('hidden');
           document.body.style.overflow = '';
        }, 300);
      }
    }
  `;

  return (
    <>
      {/* Overlay Escuro */}
      <div 
        id="cart-overlay" 
        onClick="toggleCart()" 
        className="fixed inset-0 bg-black/80 z-[60] hidden transition-opacity duration-300 opacity-0 backdrop-blur-sm"
      ></div>

      {/* Drawer Lateral */}
      <div 
        id="cart-drawer" 
        className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 border-l border-zinc-800 shadow-2xl z-[70] transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col"
      >
        
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Icon name="cart" className="w-6 h-6 text-yellow-500" />
            Seu Carrinho <span className="text-sm font-normal text-zinc-500">({items.length})</span>
          </h2>
          <button onClick="toggleCart()" className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-zinc-800">
            <Icon name="close" className="w-6 h-6" />
          </button>
        </div>

        {/* Lista de Itens (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {isAuthenticated ? (
             items.length > 0 ? (
               items.map((item, index) => (
                 <CartItem 
                    key={`${item.id}-${index}`} 
                    product={item} 
                    onRemove={(id) => console.log('Remover item', id)} // Logica client-side necessária depois
                 />
               ))
             ) : (
               <div className="text-center text-gray-500 mt-10 flex flex-col items-center">
                  <Icon name="cart" className="w-12 h-12 mb-2 opacity-20" />
                  <p>Seu carrinho está vazio.</p>
               </div>
             )
          ) : (
             <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-zinc-800/50 rounded-full flex items-center justify-center border border-zinc-700 border-dashed">
                    <Icon name="user" className="w-10 h-10 text-gray-500" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Faça Login</h3>
                    <p className="text-gray-400 text-sm max-w-[250px] mx-auto">
                        Para gerenciar seu carrinho, acesse sua conta.
                    </p>
                </div>
                <a href="/auth/login">
                   <Button variant="primary">Entrar Agora</Button>
                </a>
             </div>
          )}
        </div>

        {/* Footer com Totais */}
        {isAuthenticated && items.length > 0 && (
          <div className="p-6 border-t border-zinc-800 bg-zinc-950/50 safe-area-bottom">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Total</span>
                <span className="text-2xl font-bold text-white">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <a href="/checkout" className="block">
                <Button fullWidth variant="whatsapp">
                   Finalizar Compra
                </Button>
              </a>
          </div>
        )}
      </div>

      {/* Script de Controle (Injetado) */}
      <script dangerouslySetInnerHTML={{ __html: scriptToggle }} />
    </>
  );
};