import { Product } from '../modules/products/product.entity.ts';

/**
 * Responsabilidade: Apenas calcular o total.
 * Se amanhã tiver desconto ou imposto, mexemos SÓ AQUI.
 */
export const calculateCartTotal = (items: Product[]): number => {
  return items.reduce((acc, item) => acc + item.price, 0);
};