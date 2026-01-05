import { Hono } from 'hono';
import { Layout } from './src/components/templates/Layout.tsx';
import { Navbar } from './src/components/organisms/Navbar.tsx';
import { ProductCard } from './src/components/molecules/ProductCard.tsx';
import { ProductService } from './src/modules/products/product.service.ts';
import { formatCurrency } from './src/utils/formatCurrency.ts';
import { CartDrawer } from './src/components/organisms/CartDrawer.tsx';
import { CartDrawerScript } from './src/components/templates/scripts/CartDrawerScript.tsx';

import { ProductRepository } from './src/modules/products/product.repository.ts';

const app = new Hono();
const productRepo = new ProductRepository();
const productService = new ProductService(productRepo);

app.get('/', async (c) => {
  const products = await productService.getAllProducts();

  return c.html(
    <Layout 
      title="Adsly - Agência de Contingência"
      extra={
        <>
          <CartDrawer isAuthenticated={false} items={[]} total={0} onClose="toggleCart()" />
          <CartDrawerScript />
        </>
      }
    >
      <Navbar />
      
      {/* Hero Section (Vídeo e Título conforme PDF pág 1) */}
      <section class="bg-zinc-900/30 py-12 border-b border-zinc-800">
        <div class="max-w-7xl mx-auto px-4 text-center">
             <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4">
               A Agência de Contingência de <br/>
               <span class="text-yellow-500">Quem Você Conhece.</span>
             </h1>
             <p class="text-gray-400 max-w-2xl mx-auto mb-8">
               Segurança, qualidade e suporte 24/7 porque aqui é de casa, e a gente garante.
             </p>
             {/* Simulação do botão Play do vídeo */}
             <div class="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/50 px-6 py-3 rounded-lg text-yellow-500 cursor-pointer hover:bg-yellow-600/30">
                <span>▶ Assistir Vídeo de Apresentação</span>
             </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <main class="max-w-7xl mx-auto px-4 py-12">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-white border-l-4 border-yellow-500 pl-4">Destaques</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              id={product.id}
              title={product.title}
              formattedPrice={formatCurrency(product.price)}
              formattedOriginalPrice={product.originalPrice ? formatCurrency(product.originalPrice) : undefined}
              imageUrl={product.imageUrl}
              category={product.category}
              isSoldOut={product.status === 'sold_out'}
            />
          ))}
        </div>
      
        {/* Banner "Não encontrou?" (PDF pág 7) */}
        <div class="mt-16 bg-zinc-900 rounded-2xl p-8 text-center border border-zinc-800 relative overflow-hidden">
            <div class="relative z-10">
                <h3 class="text-2xl font-bold text-white mb-2">Não encontrou o que procurava?</h3>
                <p class="text-gray-400 mb-6">Atendemos sob encomenda! Nos peça no WhatsApp.</p>
                <a href="#" class="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-500 transition">
                    Fazer pedido personalizado (WhatsApp)
                </a>
            </div>
        </div>
      </main>

      {/* Footer Simples */}
      <footer class="border-t border-zinc-800 py-8 mt-8 text-center text-zinc-600 text-sm">
        <p>&copy; 2024 Adsly. Todos os direitos reservados. CNPJ: 58.857.150/0001-04</p>
      </footer>
    </Layout>
  );
});

export default app;