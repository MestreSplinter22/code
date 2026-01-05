// src/components/templates/AuthTemplate.tsx
import { PropsWithChildren } from "hono/jsx";
import { Layout } from "./Layout.tsx";
import { Navbar } from "../organisms/common/Navbar.tsx";

interface AuthTemplateProps extends PropsWithChildren {
  title: string;
}

export const AuthTemplate = ({ children, title }: AuthTemplateProps) => {
  return (
    <Layout title={title}>
      <Navbar isAuthenticated={false} />
      
      {/* ESTRUTURA DE CENTRALIZAÇÃO */}
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
        {children}
      </div>
    </Layout>
  );
};