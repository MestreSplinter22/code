// src/components/organisms/CartDrawer.tsx
import { CartItem } from '../molecules/CartItem.tsx';
import { Product } from '../../modules/products/product.entity.ts';
import { CartDrawerScript } from '../atoms/scripts/CartDrawerScript.tsx';

// Importação das novas moléculas (ajuste os caminhos conforme onde você salvou)
import { CartDrawerHeader } from '../molecules/cart/CartDrawerHeader.tsx';
import { CartDrawerFooter } from '../molecules/cart/CartDrawerFooter.tsx';
import { CartDrawerEmpty } from '../molecules/cart/CartDrawerEmpty.tsx';
import { CartDrawerLoginRequired } from '../molecules/cart/CartDrawerLoginRequired.tsx';

interface CartDrawerProps {
  isAuthenticated: boolean;
  items?: Product[];
}

export const CartDrawer = ({ isAuthenticated, items = [] }: CartDrawerProps) => {
  // Lógica de negócio simples (calculo de total) pode ficar aqui ou vir pronta do controller
  const total = items.reduce((acc, item) => acc + item.price, 0);
  const hasItems = items.length > 0;

  return (
    <>
      {/* Script de Comportamento Isolado */}
      <CartDrawerScript />

      {/* Overlay */}
      <div 
        id="cart-overlay" 
        onClick="toggleCart()" 
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
                onRemove={(id) => console.log('Remover item', id)} 
              />
            ))
          )}
        </div>

        {/* Footer (Só renderiza se tiver itens e estiver logado) */}
        {isAuthenticated && hasItems && (
          <CartDrawerFooter total={total} />
        )}

      </aside>
    </>
  );
};