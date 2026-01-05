import { PropsWithChildren } from "hono/jsx";
import { CartDrawer } from "../organisms/CartDrawer.tsx";
import { CartDrawerScript } from "./scripts/CartDrawerScript.tsx"; 

interface LayoutProps extends PropsWithChildren {
  title: string;
  isAuthenticated?: boolean;
}

export const Layout = ({ children, title, isAuthenticated = false }: LayoutProps) => {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style dangerouslySetInnerHTML={{ __html: `
          .text-gold { color: #ffc107; }
          .bg-card-gradient { background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%); }
          body.modal-open { overflow: hidden; }
        `}} />
      </head>
      <body className="bg-black text-white font-sans antialiased relative">
        
        {children}

        {/* Componente visual do Carrinho */}
        <CartDrawer isAuthenticated={isAuthenticated} items={[]} onClose="toggleCart()" />
        
        {/* Injeção do Script de comportamento.
            Posicionado antes do fechamento do body para garantir 
            que o DOM já esteja disponível para manipulação.
        */}
        <CartDrawerScript />
        
      </body>
    </html>
  );
};