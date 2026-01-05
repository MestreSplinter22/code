import { MainTemplate } from '../templates/MainTemplate.tsx';
import { CartOverview } from '../organisms/CartOverview.tsx';
import { Product } from '../../modules/products/product.entity.ts';

interface CartPageProps {
  isAuthenticated: boolean;
  items: Product[];
  total: number;
}

export const CartPage = ({ isAuthenticated, items, total }: CartPageProps) => {
  return (
    <MainTemplate 
      pageTitle="Meu Carrinho - Adsly"
      headerTitle="Seu Carrinho de Compras"
      isAuthenticated={isAuthenticated}
    >
        {/* Zero classes de layout aqui. Apenas injeção do Organismo. */}
        <CartOverview 
          items={items} 
          total={total} 
          isAuthenticated={isAuthenticated} 
        />
    </MainTemplate>
  );
};