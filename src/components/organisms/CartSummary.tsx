// src/components/organisms/CartSummary.tsx
import { Button } from '../atoms/Button.tsx';
import { formatCurrency } from '../../utils/formatCurrency.ts';

interface CartSummaryProps {
  total: number;
  isAuthenticated: boolean;
  hasItems: boolean;
}

export const CartSummary = ({ total, isAuthenticated, hasItems }: CartSummaryProps) => {
  // Encapsulamento da formatação (Poderia ser um utilitário separado também)
  const formattedTotal = formatCurrency(total);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sticky top-24">
      <h3 className="text-xl font-bold text-white mb-4">Resumo</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>{formattedTotal}</span>
        </div>
        <div className="h-px bg-zinc-800 my-2"></div>
        <div className="flex justify-between text-white font-bold text-lg">
          <span>Total</span>
          <span className="text-yellow-500">{formattedTotal}</span>
        </div>
      </div>

      {isAuthenticated ? (
        <Button fullWidth variant="primary" disabled={!hasItems}>
          Finalizar Compra (Pix)
        </Button>
      ) : (
        <a href="/auth/login" className="block w-full">
          <Button fullWidth variant="outline">Faça Login para Comprar</Button>
        </a>
      )}
    </div>
  );
};