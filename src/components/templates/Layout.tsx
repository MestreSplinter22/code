// src/components/templates/Layout.tsx
import { html } from 'hono/html';
import { CartDrawer } from '../organisms/CartDrawer.tsx'; // Importe o Drawer

export const Layout = (props: { children: any; title: string }) => {
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
          /* Esconde barra de rolagem quando o modal está aberto, se necessário via JS */
          body.modal-open { overflow: hidden; }
        </style>
      </head>
      <body class="bg-black text-white font-sans antialiased relative">
        ${props.children}
        
        ${CartDrawer()}
      </body>
    </html>
  `;
};