import { PropsWithChildren } from "hono/jsx";
import { Layout } from "./Layout.tsx";
import { Navbar } from "../organisms/common/Navbar.tsx";
import { CartDrawer } from "../features/cart/components/CartDrawer.tsx";

interface MainTemplateProps extends PropsWithChildren {
  pageTitle: string;
  headerTitle: string;
  isAuthenticated: boolean;
  drawerScript?: string;
}

export const MainTemplate = ({ 
  children, 
  pageTitle, 
  headerTitle, 
  isAuthenticated,
  drawerScript
}: MainTemplateProps) => {
  const drawerId = "app_cart_drawer";
  const toggleFn = `window.AdslyDrawer && window.AdslyDrawer.toggle('${drawerId}')`;

  return (
    <Layout 
      title={pageTitle}
      extra={
          <CartDrawer 
            id={drawerId}
            isAuthenticated={isAuthenticated} 
            items={[]} 
            total={0} 
            onClose={toggleFn}
            scriptContent={drawerScript}
          />
      }
    >
      <Navbar 
        isAuthenticated={isAuthenticated} 
        onToggleCart={toggleFn}
        routes={{
          home: "/",
          login: "/auth/login",
          dashboard: "/dashboard/my-orders",
          logout: "/auth/logout"
        }}
      />
      
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
