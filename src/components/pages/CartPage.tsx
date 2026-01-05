import { MainTemplate } from '../templates/MainTemplate.tsx';
import { CartOverview } from '../organisms/CartOverview.tsx';
import { Product } from '../../modules/products/product.entity.ts';
import { CartItemProps } from '../molecules/CartItem.tsx';

interface CartPageProps {
  isAuthenticated: boolean;
  items: Product[];
  total: number;
}

// Mapper function
const productToCartItemProps = (product: Product): CartItemProps => ({
  id: product.id,
  title: product.title,
  price: product.price,
  imageUrl: product.imageUrl,
});

export const CartPage = ({ isAuthenticated, items, total }: CartPageProps) => {

  const handleRemoveItem = (id: string) => {
    // Lógica para remover o item do carrinho (ex: chamar um serviço)
    console.log(`Removendo item com ID: ${id}`);
  };

  const cartItemsProps: CartItemProps[] = items.map(productToCartItemProps);

  return (
    <MainTemplate 
      pageTitle="Meu Carrinho - Adsly"
      headerTitle="Seu Carrinho de Compras"
      isAuthenticated={isAuthenticated}
    >
      <CartOverview 
        items={cartItemsProps} 
        total={total} 
        isAuthenticated={isAuthenticated} 
        onRemoveItem={handleRemoveItem}
      />
    </MainTemplate>
  );
};