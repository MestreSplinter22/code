import { Layout } from '../templates/Layout.tsx';
import { Navbar } from '../organisms/Navbar.tsx';
import { HeroSection } from '../organisms/HeroSection.tsx';
import { CtaBanner } from '../molecules/CtaBanner.tsx';
import { Footer } from '../organisms/Footer.tsx';
import { ProductCard } from '../molecules/ProductCard.tsx';
import { Product } from '../../modules/products/product.entity.ts';

interface HomePageProps {
  products: Product[];
  isAuthenticated: boolean;
}

export const HomePage = ({ products, isAuthenticated }: HomePageProps) => {
  return (
    <Layout title="Adsly - Agência de Contingência" isAuthenticated={isAuthenticated}>
      <Navbar isAuthenticated={isAuthenticated} />
      
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
              price={product.price}
              originalPrice={product.originalPrice}
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