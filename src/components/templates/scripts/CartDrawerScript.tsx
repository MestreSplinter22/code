// src/components/atoms/scripts/CartDrawerScript.tsx
export const CartDrawerScript = () => {
    const scriptToggle = `
      function toggleCart() {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (!drawer || !overlay) return;
        
        if (drawer.classList.contains('translate-x-full')) {
          // Abrir
          overlay.classList.remove('hidden');
          setTimeout(() => {
             overlay.classList.remove('opacity-0');
             drawer.classList.remove('translate-x-full');
          }, 10);
          document.body.style.overflow = 'hidden';
        } else {
          // Fechar
          drawer.classList.add('translate-x-full');
          overlay.classList.add('opacity-0');
          setTimeout(() => {
             overlay.classList.add('hidden');
             document.body.style.overflow = '';
          }, 300);
        }
      }
    `;
  
    return <script dangerouslySetInnerHTML={{ __html: scriptToggle }} />;
  };