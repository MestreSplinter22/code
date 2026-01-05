// src/components/templates/MainTemplate.tsx
import { PropsWithChildren } from "hono/jsx";
import { Layout } from "./Layout.tsx"; // O seu Layout base (html/head/body)
import { Navbar } from "../organisms/Navbar.tsx";

interface MainTemplateProps extends PropsWithChildren {
  pageTitle: string; // Título da aba do navegador
  headerTitle: string; // Título H1 visual da página
  isAuthenticated: boolean;
}

export const MainTemplate = ({ 
  children, 
  pageTitle, 
  headerTitle, 
  isAuthenticated 
}: MainTemplateProps) => {
  return (
    <Layout title={pageTitle} isAuthenticated={isAuthenticated}>
      <Navbar isAuthenticated={isAuthenticated} />
      
      {/* AQUI ESTÁ A ESTRUTURA (GRID/SPACING) QUE SAIU DA PAGE */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-4">
            {headerTitle}
        </h1>

        <main>
            {children}
        </main>
      </div>
    </Layout>
  );
};