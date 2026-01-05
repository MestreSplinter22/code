import { Button } from '../atoms/Button.tsx';
import { Icon } from '../atoms/Icon.tsx';

export interface ProductCardProps {
  id: string;
  title: string;
  formattedPrice: string;
  formattedOriginalPrice?: string;
  imageUrl: string;
  category: string;
  isSoldOut: boolean;
}

export const ProductCard = ({ title, formattedPrice, formattedOriginalPrice, imageUrl, category, isSoldOut }: ProductCardProps) => {
  return (
    <div class="relative group rounded-xl border border-zinc-800 bg-card-gradient p-4 transition-all hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">

      {/* Badge de Esgotado ou Categoria */}
      <div class="absolute top-3 right-3 z-10">
        {isSoldOut ? (
          <span class="bg-red-900/80 text-red-200 text-xs font-bold px-2 py-1 rounded border border-red-700">
            ESGOTADO
          </span>
        ) : (
          <span class="bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded border border-zinc-700">
            {category}
          </span>
        )}
      </div>

      {/* Ícone/Imagem */}
      <div class="h-32 flex items-center justify-center mb-4 bg-zinc-900/50 rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} class="w-16 h-16 object-contain opacity-80" />
      </div>

      {/* Título */}
      <h3 class="text-sm font-bold text-gray-100 h-12 leading-snug mb-2 overflow-hidden">
        {title}
      </h3>

      {/* Preço */}
      <div class="mb-4">
        {formattedOriginalPrice && (
          <span class="block text-xs text-gray-500 line-through">
            {formattedOriginalPrice}
          </span>
        )}
        <span class="text-xl font-bold text-yellow-500">
          {formattedPrice}
        </span>
      </div>

      {/* Botão de Ação */}
      <Button
        variant={isSoldOut ? 'ghost' : 'outline'}
        fullWidth
        disabled={isSoldOut}
      >
        {isSoldOut ? 'Esgotado' : (
          <>
            <Icon name="cart" />
            Comprar agora
          </>
        )}
      </Button>

      {/* Info Pix (conforme PDF) */}
      {!isSoldOut && <div class="mt-2 text-center text-[10px] text-zinc-500">À vista no Pix</div>}
    </div>
  );
};
