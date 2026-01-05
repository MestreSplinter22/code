// src/components/molecules/cart/CartDrawerFooter.tsx
import { Button } from '../../../atoms/Button.tsx';
import { formatCurrency } from '../../../../utils/formatCurrency.ts';

interface CartDrawerFooterProps {
  total: number;
}

export const CartDrawerFooter = ({ total }: CartDrawerFooterProps) => (
    <div className="p-6 border-t border-zinc-800 bg-zinc-950">
      <div className="flex justify-between items-center mb-4">
        <span className="text-zinc-400">Total a pagar:</span>
        <span className="text-2xl font-bold text-white">R$ {total.toFixed(2)}</span>
      </div>
      <Button fullWidth variant="success">
        Finalizar no WhatsApp
      </Button>
      <p className="text-xs text-center text-zinc-600 mt-3">
        Ambiente seguro e criptografado
      </p>
    </div>
);