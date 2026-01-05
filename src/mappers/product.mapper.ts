import { Product } from '../modules/products/product.entity.ts';
import { ProductCardProps } from '../components/molecules/product/ProductCard.tsx';
import { formatCurrency } from '../utils/formatCurrency.ts';

export const productToCardProps = (product: Product): ProductCardProps => ({
  id: product.id,
  title: product.title,
  formattedPrice: formatCurrency(product.price),
  formattedOriginalPrice: product.originalPrice ? formatCurrency(product.originalPrice) : undefined,
  imageUrl: product.imageUrl,
  category: product.category,
  isSoldOut: product.status === 'sold_out',
});
