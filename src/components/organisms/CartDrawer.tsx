import { CartItem } from '../molecules/CartItem.tsx';
import { CartDrawerHeader } from '../molecules/cart/CartDrawerHeader.tsx';
import { CartDrawerFooter } from '../molecules/cart/CartDrawerFooter.tsx';
import { CartDrawerEmpty } from '../molecules/cart/CartDrawerEmpty.tsx';
import { CartDrawerLoginRequired } from '../molecules/cart/CartDrawerLoginRequired.tsx';

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
  id = 'cart-drawer-component'
}: CartDrawerProps) => {
  const hasItems = items.length > 0;
  const overlayId = `${id}-overlay`;
  const drawerId = `${id}-content`;

  // Script encapsulado para este componente específico
  const scriptContent = `
    (function() {
       window['toggle_${id}'] = function() {
          const drawer = document.getElementById('${drawerId}');
          const overlay = document.getElementById('${overlayId}');
          if (!drawer || !overlay) return;
          
          if (drawer.classList.contains('translate-x-full')) {
            // Abrir
            overlay.classList.remove('hidden');
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
    })();
  `;

  // Se onClose não for fornecido, usa a função gerada internamente
  const closeAction = onClose || `toggle_${id}()`;

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