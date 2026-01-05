// src/components/templates/Layout.tsx
import { html } from 'hono/html';
import { CartDrawer } from '../organisms/CartDrawer.tsx';

// Adicionada a prop opcional isAuthenticated
export const Layout = (props: { children: any; title: string; isAuthenticated?: boolean }) => {
  // Define false como padrão se não for passado
  const isAuthenticated = props.isAuthenticated ?? false;

  return html`
    <!DOCTYPE html>
    <html lang="pt-BR" class="dark">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${props.title}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          .text-gold { color: #FFC107; }
          .bg-card-gradient { background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%); }
          body.modal-open { overflow: hidden; }
        </style>
      </head>
      <body class="bg-black text-white font-sans antialiased relative">
        ${props.children}
        
        ${CartDrawer(isAuthenticated)}
      </body>
    </html>
  `;
};