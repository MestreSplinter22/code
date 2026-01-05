// src/components/organisms/CartDrawer.tsx
import { html } from 'hono/html';

export const CartDrawer = (isAuthenticated: boolean) => {
  return html`
    <div id="cart-overlay" onclick="toggleCart()" class="fixed inset-0 bg-black/80 z-[60] hidden transition-opacity duration-300 opacity-0"></div>

    <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 border-l border-zinc-800 shadow-2xl z-[70] transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col">
      
      <div class="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900">
        <h2 class="text-xl font-bold text-white flex items-center gap-2">
          <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          Seu Carrinho
        </h2>
        <button onclick="toggleCart()" class="text-gray-400 hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-6 space-y-4 relative">
        ${isAuthenticated ? html`
            <div class="flex gap-4 p-3 bg-zinc-950/50 rounded-lg border border-zinc-800">
               <div class="w-16 h-16 bg-zinc-900 rounded flex items-center justify-center text-2xl">🐳</div>
               <div class="flex-1">
                 <h4 class="text-sm font-bold text-gray-200">BM Reestabelecida 🇧🇷</h4>
                 <div class="flex justify-between items-end mt-1">
                   <span class="text-yellow-500 font-bold">R$ 139,90</span>
                   <button class="text-xs text-red-500 hover:text-red-400 underline">Remover</button>
                 </div>
               </div>
            </div>

            <div class="text-center text-gray-500 text-sm mt-10">
                Seu carrinho está pronto para o checkout.
            </div>
        ` : html`
            <div class="h-full flex flex-col items-center justify-center text-center space-y-6 mt-10">
                <div class="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center">
                    <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-2">Faça Login</h3>
                    <p class="text-gray-400 text-sm max-w-[250px] mx-auto">
                        Para adicionar itens e finalizar sua compra, é necessário acessar sua conta.
                    </p>
                </div>
                <a href="/auth/login" class="bg-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                    Entrar Agora
                </a>
            </div>
        `}
      </div>

      ${isAuthenticated ? html`
        <div class="p-6 border-t border-zinc-800 bg-zinc-900">
            <div class="flex justify-between items-center mb-4">
            <span class="text-gray-400">Total</span>
            <span class="text-2xl font-bold text-white">R$ 139,90</span>
            </div>
            <button class="w-full bg-yellow-500 text-black font-bold py-3.5 rounded-lg hover:bg-yellow-400 transition transform active:scale-95 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
            Finalizar Compra
            </button>
        </div>
      ` : html``}
    </div>

    <script>
      function toggleCart() {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        
        if (drawer.classList.contains('translate-x-full')) {
          overlay.classList.remove('hidden');
          setTimeout(() => {
             overlay.classList.remove('opacity-0');
             drawer.classList.remove('translate-x-full');
          }, 10);
        } else {
          drawer.classList.add('translate-x-full');
          overlay.classList.add('opacity-0');
          setTimeout(() => {
             overlay.classList.add('hidden');
          }, 300);
        }
      }
    </script>
  `;
};