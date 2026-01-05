import { Layout } from '../templates/Layout.tsx';
import { Navbar } from '../organisms/Navbar.tsx';
import { HeroSection } from '../organisms/HeroSection.tsx';
import { CtaBanner } from '../molecules/CtaBanner.tsx';
import { Footer } from '../organisms/Footer.tsx';
import { ProductCard } from '../molecules/ProductCard.tsx';
import { Product } from '../../modules/products/product.entity.ts';
import { formatCurrency } from '../../utils/formatCurrency.ts';
import { CartDrawer } from '../organisms/CartDrawer.tsx';

interface HomePageProps {
  products: Product[];
  isAuthenticated: boolean;
}

export const HomePage = ({ products, isAuthenticated }: HomePageProps) => {
  const drawerId = "home-cart-drawer";
  const toggleFn = `toggle_${drawerId}()`;

  return (
    <Layout 
      title="Adsly - Agência de Contingência"
      extra={
          <CartDrawer 
            id={drawerId}
            isAuthenticated={isAuthenticated} 
            items={[]} 
            total={0} 
            onClose={toggleFn} 
          />
      }
    >
      <Navbar 
        isAuthenticated={isAuthenticated} 
        onToggleCart={toggleFn}
        routes={{
          home: "/",
          login: "/auth/login",
          dashboard: "/dashboard/my-orders",
          logout: "/auth/logout"
        }}
      />
      
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white border-l-4 border-yellow-500 pl-4">Destaques</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              // CORREÇÃO: Passando props individuais ao invés do objeto 'product'
              id={product.id}
              title={product.title}
              formattedPrice={formatCurrency(product.price)}
              formattedOriginalPrice={product.originalPrice ? formatCurrency(product.originalPrice) : undefined}
              imageUrl={product.imageUrl}
              category={product.category}
              isSoldOut={product.status === 'sold_out'} // Mapeamento de lógica de UI
            />
          ))}
        </div>
      
        <CtaBanner />
      </main>

      <Footer />
    </Layout>
  );
};