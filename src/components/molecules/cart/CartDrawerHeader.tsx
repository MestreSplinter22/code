// src/components/molecules/cart/CartDrawerHeader.tsx
import { Icon } from '../../atoms/Icon.tsx';

interface CartDrawerHeaderProps {
  itemCount: number;
  onClose?: string;
}

export const CartDrawerHeader = ({ itemCount, onClose }: CartDrawerHeaderProps) => (
  <div className="p-5 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/50">
    <h2 className="text-xl font-bold text-white flex items-center gap-2">
      <Icon name="cart" className="w-6 h-6 text-yellow-500" />
      Seu Carrinho <span className="text-sm font-normal text-zinc-500">({itemCount})</span>
    </h2>
    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-zinc-800">
      <Icon name="close" className="w-6 h-6" />
    </button>
  </div>
);