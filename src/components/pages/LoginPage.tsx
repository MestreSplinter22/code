// src/components/pages/LoginPage.tsx
import { Layout } from '../templates/Layout.tsx';
import { Navbar } from '../organisms/Navbar.tsx';
import { Button } from '../atoms/Button.tsx';

// Propriedades que a página pode precisar (ex: mensagens de erro vindas do controller)
interface LoginPageProps {
  error?: string;
}

export const LoginPage = ({ error }: LoginPageProps) => {
  return (
    <Layout title="Entrar - Adsly" isAuthenticated={false}>
      <Navbar isAuthenticated={false} />
      
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>

          <h2 className="text-3xl font-bold text-white mb-2 text-center">Bem-vindo de volta</h2>
          
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-2 mb-6 rounded text-center text-xs text-yellow-500">
             Teste: <b>admin@adsly.com</b> | Senha: <b>123456</b>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 p-3 mb-4 rounded text-center text-sm text-red-400">
                {error}
            </div>
          )}

          <form method="POST" action="/auth/login" className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">E-mail</label>
              <input 
                name="email" 
                type="email" 
                required
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" 
                placeholder="admin@adsly.com" 
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1.5">
                  <label className="block text-sm font-medium text-gray-400">Senha</label>
                  <a href="#" className="text-xs text-yellow-500 hover:underline">Esqueceu?</a>
              </div>
              <input 
                name="password" 
                type="password" 
                required
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" 
                placeholder="123456" 
              />
            </div>

            <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition shadow-[0_0_10px_rgba(234,179,8,0.2)]">
              Entrar na Conta
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-zinc-500">
            Não tem uma conta? 
            <a href="/auth/register" className="text-yellow-500 font-bold hover:underline ml-1">Criar agora</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};