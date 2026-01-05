import { Button } from '../../../atoms/Button.tsx';

interface UserNavActionsProps {
  isAuthenticated: boolean;
  routes: {
    dashboard: string;
    logout: string;
    login: string;
  };
}

export const UserNavActions = ({ isAuthenticated, routes }: UserNavActionsProps) => {
  const { dashboard, logout, login } = routes;
  
  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <a href={dashboard} className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition">
          Meus Pedidos
        </a>
        <a href={logout} className="text-sm font-medium text-red-500 hover:text-red-400 transition border border-red-900/50 px-3 py-1 rounded-full hover:bg-red-900/20">
          Sair
        </a>
      </div>
    );
  }

  return (
    <a href={login}>
      <Button variant="primary" className="px-5 py-2 text-sm">Entrar</Button>
    </a>
  );
};
