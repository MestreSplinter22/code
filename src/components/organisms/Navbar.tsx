import { Button } from '../atoms/Button.tsx';

interface NavbarProps {
  isAuthenticated?: boolean;
  onToggleCart?: string;
  cartCount?: number;
  routes?: {
    home?: string;
    login?: string;
    dashboard?: string;
    logout?: string;
  };
}

export const Navbar = ({ 
  isAuthenticated = false, 
  onToggleCart, 
  cartCount = 1,
  routes = {}
}: NavbarProps) => {
  const {
    home = "/",
    login = "/auth/login",
    dashboard = "/dashboard/my-orders",
    logout = "/auth/logout"
  } = routes;

  return (
    <nav className="border-b border-zinc-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href={home} className="flex-shrink-0 font-bold text-xl tracking-tighter hover:opacity-80 transition">
            <span className="text-white">ADSLY</span><span className="text-yellow-500">.STORE</span>
          </a>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative group">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full bg-zinc-900 border border-zinc-700 text-gray-300 text-sm rounded-full py-2 px-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
              />
              <button className="absolute right-2 top-1.5 text-gray-500 group-hover:text-yellow-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Ações */}
          <div className="flex items-center gap-6">

            <button
              onclick={onToggleCart}
              className="relative text-gray-300 hover:text-yellow-500 transition group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-black">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Lógica de Autenticação */}
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <a href={dashboard} className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition">
                  Meus Pedidos
                </a>
                <a href={logout} className="text-sm font-medium text-red-500 hover:text-red-400 transition border border-red-900/50 px-3 py-1 rounded-full hover:bg-red-900/20">
                  Sair
                </a>
              </div>
            ) : (
              <a href={login}>
                <Button variant="primary" className="px-5 py-2 text-sm">Entrar</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};