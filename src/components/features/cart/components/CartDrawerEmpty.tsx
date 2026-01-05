// src/components/molecules/cart/CartDrawerEmpty.tsx
import { Icon } from '../../../atoms/Icon.tsx';

export const CartDrawerEmpty = () => (
  <div className="text-center text-gray-500 mt-10 flex flex-col items-center">
    <Icon name="cart" className="w-12 h-12 mb-2 opacity-20" />
    <p>Seu carrinho está vazio.</p>
  </div>
);