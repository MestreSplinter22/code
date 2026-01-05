if (!window.AdslyDrawer) {
  window.AdslyDrawer = {
    toggle: function(id) {
      const drawerId = id + '-content';
      const overlayId = id + '-overlay';
      const drawer = document.getElementById(drawerId);
      const overlay = document.getElementById(overlayId);
      
      if (!drawer || !overlay) {
        console.warn('Drawer elements not found for ID:', id);
        return;
      }
      
      if (drawer.classList.contains('translate-x-full')) {
        // Abrir
        overlay.classList.remove('hidden');
        // Force reflow/repaint logic usually needs a small tick, 10ms is fine
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
  };
}
