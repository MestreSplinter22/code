import { Layout } from '../templates/Layout.tsx';
import { Navbar } from '../organisms/common/Navbar.tsx';
import { HeroSection } from '../organisms/sections/HeroSection.tsx';
import { CtaBanner } from '../molecules/CtaBanner.tsx';
import { Footer } from '../organisms/common/Footer.tsx';
import { ProductCard } from '../molecules/product/ProductCard.tsx';
import { Product } from '../../modules/products/product.entity.ts';
import { CartDrawer } from '../organisms/cart/CartDrawer.tsx';
import { productToCardProps } from '../../mappers/product.mapper.ts';

interface HomePageProps {
  products: Product[];
  isAuthenticated: boolean;
}

export const HomePage = ({ products, isAuthenticated }: HomePageProps) => {
  const drawerId = "home_cart_drawer";
  const toggleFn = `window.AdslyDrawer && window.AdslyDrawer.toggle('${drawerId}')`;

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
              {...productToCardProps(product)}
            />
          ))}
        </div>
      
        <CtaBanner />
      </main>

      <Footer />
    </Layout>
  );
};
