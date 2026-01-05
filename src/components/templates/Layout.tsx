import { PropsWithChildren } from "hono/jsx";

interface LayoutProps extends PropsWithChildren {
  title: string;
  extra?: any; // Slot para modais, scripts, drawers, etc.
}

export const Layout = ({ children, title, extra }: LayoutProps) => {
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

        {/* Slot para elementos fora do fluxo normal (Drawers, Modais, Scripts) */}
        {extra}
        
      </body>
    </html>
  );
};
