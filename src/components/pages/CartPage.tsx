import { MainTemplate } from '../templates/MainTemplate.tsx';
import { CartOverview } from '../features/cart/components/CartOverview.tsx';
import { Product } from '../../modules/products/product.entity.ts';
import { CartItemProps } from '../molecules/cart/CartItem.tsx';
import { productToCartItemProps } from '../../mappers/cart.mapper.ts';

interface CartPageProps {
  isAuthenticated: boolean;
  items: Product[];
  total: number;
  drawerScript?: string;
}

export const CartPage = ({ isAuthenticated, items, total, drawerScript }: CartPageProps) => {

  const cartItemsProps: CartItemProps[] = items.map(productToCartItemProps);

  return (
    <MainTemplate 
      pageTitle="Meu Carrinho - Adsly"
      headerTitle="Seu Carrinho de Compras"
      isAuthenticated={isAuthenticated}
      drawerScript={drawerScript}
    >
      <CartOverview 
        items={cartItemsProps} 
        total={total} 
        isAuthenticated={isAuthenticated} 
      />
    </MainTemplate>
  );
};
