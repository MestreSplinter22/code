import { CartItem } from '../../../molecules/cart/CartItem.tsx';
import { CartDrawerHeader } from './CartDrawerHeader.tsx';
import { CartDrawerFooter } from './CartDrawerFooter.tsx';
import { CartDrawerEmpty } from './CartDrawerEmpty.tsx';
import { CartDrawerLoginRequired } from './CartDrawerLoginRequired.tsx';

// Interface para os dados do item (sem handlers)
export interface CartDrawerItemData {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

interface CartDrawerProps {
  isAuthenticated: boolean;
  items?: CartDrawerItemData[];
  total: number;
  onClose?: string;
  // Identificador do DOM para o drawer, para evitar conflitos de ID global
  id?: string;
  scriptContent?: string;
}

export const CartDrawer = ({ 
  isAuthenticated, 
  items = [], 
  total,
  onClose,
  id = 'cart_drawer_component',
  scriptContent
}: CartDrawerProps) => {
  const hasItems = items.length > 0;
  const overlayId = `${id}-overlay`;
  const drawerId = `${id}-content`;

  // Use the global function defined in drawer.js
  const defaultCloseAction = `window.AdslyDrawer && window.AdslyDrawer.toggle('${id}')`;
  const closeAction = onClose || defaultCloseAction;

  return (
    <>
      {scriptContent && <script dangerouslySetInnerHTML={{ __html: scriptContent }} />}
      
      {/* Overlay */}
      <div 
        id={overlayId} 
        onclick={closeAction} 
        className="fixed inset-0 bg-black/80 z-[60] hidden transition-opacity duration-300 opacity-0 backdrop-blur-sm"
      />

      {/* Drawer Container */}
      <aside 
        id={drawerId} 
        className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 border-l border-zinc-800 shadow-2xl z-[70] transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col"
      >
        
        <CartDrawerHeader itemCount={items.length} onClose={closeAction} />

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {!isAuthenticated ? (
            <CartDrawerLoginRequired />
          ) : !hasItems ? (
            <CartDrawerEmpty />
          ) : (
            items.map((item, index) => (
              <CartItem 
                key={`${item.id}-${index}`} 
                id={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))
          )}
        </div>

        {isAuthenticated && hasItems && (
          <CartDrawerFooter total={total} />
        )}

      </aside>
    </>
  );
};
