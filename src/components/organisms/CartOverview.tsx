// src/components/organisms/CartOverview.tsx
import { CartItem } from '../molecules/CartItem.tsx';
import { CartSummary } from './CartSummary.tsx'; // (Aquele que criamos no passo anterior)
import { CartEmptyState } from '../molecules/CartEmptyState.tsx'; // (Aquele que criamos no passo anterior)
import { Product } from '../../modules/products/product.entity.ts';

interface CartOverviewProps {
  items: Product[];
  total: number;
  isAuthenticated: boolean;
}

export const CartOverview = ({ items, total, isAuthenticated }: CartOverviewProps) => {
  const hasItems = items && items.length > 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Coluna da Esquerda: Lista ou Vazio */}
      <div className="lg:col-span-2 space-y-4">
        {isAuthenticated && hasItems ? (
          items.map((item, index) => (
            <CartItem 
              key={`${item.id}-${index}`} 
              product={item} 
              onRemove={(id) => console.log('Remover', id)} 
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