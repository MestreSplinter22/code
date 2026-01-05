import { Icon } from '../../atoms/Icon.tsx';
import { formatCurrency } from '../../../utils/formatCurrency.ts';

export interface CartItemProps {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  onRemove: (id: string) => void;
}

export const CartItem = ({ id, imageUrl, title, price, onRemove }: CartItemProps) => {
  return (
    <div className="flex gap-4 p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 animate-fade-in">
       {/* Placeholder de imagem ou ícone baseado na categoria */}
       <div className="w-16 h-16 bg-zinc-900 rounded flex items-center justify-center text-2xl border border-zinc-800">
         <img src={imageUrl} alt={title} className="w-8 h-8 opacity-75" />
       </div>
       
       <div className="flex-1 min-w-0"> {/* min-w-0 ajuda no text-truncate */}
         <h4 className="text-sm font-bold text-gray-200 truncate pr-2">
            {title}
         </h4>
         <div className="flex justify-between items-end mt-1">
           <span className="text-yellow-500 font-bold text-sm">
             {formatCurrency(price)}
           </span>
           
           <button 
             onClick={() => onRemove(id)}
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
