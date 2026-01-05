// src/components/molecules/CartItem.tsx
import { Product } from '../../modules/products/product.entity.ts';
import { Icon } from '../atoms/Icon.tsx';

interface CartItemProps {
  product: Product; // Ou uma interface específica de CartItem se tiver quantidade
  onRemove: (id: string) => void;
}

export const CartItem = ({ product, onRemove }: CartItemProps) => {
  return (
    <div className="flex gap-4 p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 animate-fade-in">
       {/* Placeholder de imagem ou ícone baseado na categoria */}
       <div className="w-16 h-16 bg-zinc-900 rounded flex items-center justify-center text-2xl border border-zinc-800">
         {/* Em um cenário real, usaria product.imageUrl */}
         <img src={product.imageUrl} alt={product.title} className="w-8 h-8 opacity-75" />
       </div>
       
       <div className="flex-1 min-w-0"> {/* min-w-0 ajuda no text-truncate */}
         <h4 className="text-sm font-bold text-gray-200 truncate pr-2">
            {product.title}
         </h4>
         <div className="flex justify-between items-end mt-1">
           <span className="text-yellow-500 font-bold text-sm">
             R$ {product.price.toFixed(2).replace('.', ',')}
           </span>
           
           <button 
             onClick={() => onRemove(product.id)}
             className="flex items-center gap-1 text-[10px] text-red-500 hover:text-red-400 hover:underline transition"
           >
             <Icon name="close" className="w-3 h-3" />
             Remover
           </button>
         </div>
       </div>
    </div>
  );
};