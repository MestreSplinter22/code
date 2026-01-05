// src/components/molecules/CartEmptyState.tsx
import { Icon } from '../../../atoms/Icon.tsx';

interface CartEmptyStateProps {
  isAuthenticated: boolean;
}

export const CartEmptyState = ({ isAuthenticated }: CartEmptyStateProps) => (
  <div className="text-center py-12 bg-zinc-900/50 rounded-xl border border-zinc-800 border-dashed">
    <Icon name="cart" className="w-12 h-12 text-gray-600 mx-auto mb-4"/>
    <p className="text-gray-400">
      {isAuthenticated 
        ? "Seu carrinho está vazio." 
        : "Faça login para ver seu carrinho."}
    </p>
  </div>
);