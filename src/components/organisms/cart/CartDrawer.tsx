import { CartItem } from '../../molecules/cart/CartItem.tsx';
import { CartDrawerHeader } from '../../molecules/cart/CartDrawerHeader.tsx';
import { CartDrawerFooter } from '../../molecules/cart/CartDrawerFooter.tsx';
import { CartDrawerEmpty } from '../../molecules/cart/CartDrawerEmpty.tsx';
import { CartDrawerLoginRequired } from '../../molecules/cart/CartDrawerLoginRequired.tsx';

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
  onRemoveItem?: (id: string) => void;
  // Identificador do DOM para o drawer, para evitar conflitos de ID global
  id?: string;
}

export const CartDrawer = ({ 
  isAuthenticated, 
  items = [], 
  total,
  onClose,
  onRemoveItem = (id) => console.log('Remove item:', id),
  id = 'cart_drawer_component'
}: CartDrawerProps) => {
  const hasItems = items.length > 0;
  const overlayId = `${id}-overlay`;
  const drawerId = `${id}-content`;
  
  // Read script content
  let scriptContent = "";
  try {
      scriptContent = Deno.readTextFileSync("src/scripts/ui-behaviors/drawer.js");
  } catch (e) {
      console.error("Failed to load drawer script", e);
  }

  // Use the global function defined in drawer.js
  const defaultCloseAction = `window.AdslyDrawer && window.AdslyDrawer.toggle('${id}')`;
  const closeAction = onClose || defaultCloseAction;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: scriptContent }} />
      
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
                onRemove={onRemoveItem} 
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
