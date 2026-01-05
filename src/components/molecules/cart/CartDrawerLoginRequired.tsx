// src/components/molecules/cart/CartDrawerLoginRequired.tsx
import { Icon } from '../../atoms/Icon.tsx';
import { Button } from '../../atoms/Button.tsx';

export const CartDrawerLoginRequired = () => (
  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
    <div className="w-20 h-20 bg-zinc-800/50 rounded-full flex items-center justify-center border border-zinc-700 border-dashed">
      <Icon name="user" className="w-10 h-10 text-gray-500" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">Faça Login</h3>
      <p className="text-gray-400 text-sm max-w-[250px] mx-auto">
        Para gerenciar seu carrinho, acesse sua conta.
      </p>
    </div>
    <a href="/auth/login">
      <Button variant="primary">Entrar Agora</Button>
    </a>
  </div>
);