// src/components/molecules/cart/CartDrawerFooter.tsx
import { Button } from '../../atoms/Button.tsx';
import { formatCurrency } from '../../../utils/formatCurrency.ts';

interface CartDrawerFooterProps {
  total: number;
}

export const CartDrawerFooter = ({ total }: CartDrawerFooterProps) => (
  <div className="p-6 border-t border-zinc-800 bg-zinc-950/50 safe-area-bottom">
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-400">Total</span>
      <span className="text-2xl font-bold text-white">
        {formatCurrency(total)}
      </span>
    </div>
    <a href="/checkout" className="block">
      <Button fullWidth variant="whatsapp">
        Finalizar Compra
      </Button>
    </a>
  </div>
);