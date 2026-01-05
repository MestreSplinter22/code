import { Product } from '../../modules/products/product.entity.ts';
import { Button } from '../atoms/Button.tsx';
import { Icon } from '../atoms/Icon.tsx';

export const ProductCard = ({ product }: { product: Product }) => {
  const isSoldOut = product.status === 'sold_out';

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
            {product.category}
          </span>
        )}
      </div>

      {/* Ícone/Imagem */}
      <div class="h-32 flex items-center justify-center mb-4 bg-zinc-900/50 rounded-lg overflow-hidden">
        <img src={product.imageUrl} alt={product.title} class="w-16 h-16 object-contain opacity-80" />
      </div>

      {/* Título */}
      <h3 class="text-sm font-bold text-gray-100 h-12 leading-snug mb-2 overflow-hidden">
        {product.title}
      </h3>

      {/* Preço */}
      <div class="mb-4">
        {product.originalPrice && (
          <span class="block text-xs text-gray-500 line-through">
            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
          </span>
        )}
        <span class="text-xl font-bold text-yellow-500">
          R$ {product.price.toFixed(2).replace('.', ',')}
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
            <Icon name="cart" /> {/* Se tiver criado o átomo de Icon */}
            Comprar agora
          </>
        )}
      </Button>

      {/* Info Pix (conforme PDF) */}
      {!isSoldOut && <div class="mt-2 text-center text-[10px] text-zinc-500">À vista no Pix</div>}
    </div>
  );
};