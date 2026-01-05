import { CartItem } from '../molecules/CartItem.tsx';
import { Product } from '../../modules/products/product.entity.ts';
import { calculateCartTotal } from '../../utils/cart.utils.ts'; //

// Importação das moléculas
import { CartDrawerHeader } from '../molecules/cart/CartDrawerHeader.tsx';
import { CartDrawerFooter } from '../molecules/cart/CartDrawerFooter.tsx';
import { CartDrawerEmpty } from '../molecules/cart/CartDrawerEmpty.tsx';
import { CartDrawerLoginRequired } from '../molecules/cart/CartDrawerLoginRequired.tsx';

interface CartDrawerProps {
  isAuthenticated: boolean;
  items?: Product[];
}

export const CartDrawer = ({ isAuthenticated, items = [] }: CartDrawerProps) => {
  // 1. A lógica matemática foi delegada para o utilitário
  const total = calculateCartTotal(items);
  const hasItems = items.length > 0;

  // 2. Removemos o <CartDrawerScript /> daqui. 
  // O componente visual não deve ser responsável por injetar scripts globais.

  return (
    <>
      {/* Overlay */}
      <div 
        id="cart-overlay" 
        onclick="toggleCart()" // Nota: em Hono/JSX puro usa-se onclick (minúsculo) string ou função dependendo da config
        className="fixed inset-0 bg-black/80 z-[60] hidden transition-opacity duration-300 opacity-0 backdrop-blur-sm"
      />

      {/* Drawer Container */}
      <aside 
        id="cart-drawer" 
        className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 border-l border-zinc-800 shadow-2xl z-[70] transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col"
      >
        
        {/* Header */}
        <CartDrawerHeader itemCount={items.length} />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {!isAuthenticated ? (
            <CartDrawerLoginRequired />
          ) : !hasItems ? (
            <CartDrawerEmpty />
          ) : (
            items.map((item, index) => (
              <CartItem 
                key={`${item.id}-${index}`} 
                product={item} 
                onRemove={(id) => console.log('Remover item (client-side needed)', id)} 
              />
            ))
          )}
        </div>

        {/* Footer */}
        {isAuthenticated && hasItems && (
          <CartDrawerFooter total={total} />
        )}

      </aside>
    </>
  );
};