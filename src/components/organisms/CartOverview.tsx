// src/components/organisms/CartOverview.tsx
import { CartItem, CartItemProps } from '../molecules/CartItem.tsx';
import { CartSummary } from './CartSummary.tsx';
import { CartEmptyState } from '../molecules/CartEmptyState.tsx';

interface CartOverviewProps {
  items: CartItemProps[];
  onRemoveItem: (id: string) => void;
  total: number;
  isAuthenticated: boolean;
}

export const CartOverview = ({ items, onRemoveItem, total, isAuthenticated }: CartOverviewProps) => {
  const hasItems = items && items.length > 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Coluna da Esquerda: Lista ou Vazio */}
      <div className="lg:col-span-2 space-y-4">
        {isAuthenticated && hasItems ? (
          items.map((item) => (
            <CartItem 
              key={item.id}
              {...item}
              onRemove={onRemoveItem} 
            />
          ))
        ) : (
          <CartEmptyState isAuthenticated={isAuthenticated} />
        )}
      </div>

      {/* Coluna da Direita: Resumo */}
      <div className="lg:col-span-1">
        <CartSummary 
            total={total} 
            isAuthenticated={isAuthenticated} 
            hasItems={hasItems} 
        />
      </div>
    </div>
  );
};