import { Product } from '../modules/products/product.entity.ts';
import { CartItemProps } from '../components/molecules/cart/CartItem.tsx';

export const productToCartItemProps = (product: Product): CartItemProps => ({
  id: product.id,
  title: product.title,
  price: product.price,
  imageUrl: product.imageUrl,
});
