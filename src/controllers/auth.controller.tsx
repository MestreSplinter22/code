// src/controllers/auth.controller.tsx
import { Hono } from 'hono';
import { setCookie, deleteCookie } from 'hono/cookie';
import { Layout } from '../components/templates/Layout.tsx';
import { Navbar } from '../components/organisms/Navbar.tsx';
import { AuthService } from '../modules/auth/auth.service.ts';
import { Button } from '../components/atoms/Button.tsx';

export const createAuthController = (authService: AuthService) => {
  const app = new Hono();

  // 1. Rota de Logout: Limpa o cookie e volta para a home
  app.get('/logout', (c) => {
    deleteCookie(c, 'auth_token');
    return c.redirect('/');
  });

  // 2. Rota de Login (Formulário)
  app.get('/login', (c) => {
    return c.html(
      <Layout title="Entrar - Adsly" isAuthenticated={false}>
        <Navbar isAuthenticated={false} />
        
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>

            <h2 className="text-3xl font-bold text-white mb-2 text-center">Bem-vindo de volta</h2>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-2 mb-6 rounded text-center text-xs text-yellow-500">
               Teste: <b>admin@adsly.com</b> | Senha: <b>123456</b>
            </div>

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
  });

  // 3. Processamento de Login (POST)
  app.post('/login', async (c) => {
    const body = await c.req.parseBody();
    const email = body['email'] as string;
    const password = body['password'] as string;

    const isValid = await authService.validateUser(email, password);

    if (isValid) {
        setCookie(c, 'auth_token', 'true_token_secret', { 
            path: '/', 
            httpOnly: true,
            maxAge: 60 * 60 * 24 
        });
        return c.redirect('/dashboard/my-orders');
    } else {
        // Em um cenário real, você redirecionaria com uma mensagem de erro
        return c.text('Usuário ou senha inválidos', 401);
    }
  });

  // 4. Rota de Registro
  app.get('/register', (c) => {
    return c.html(
      <Layout title="Criar Conta - Adsly" isAuthenticated={false}>
        <Navbar isAuthenticated={false} />
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>

            <h2 className="text-3xl font-bold text-white mb-2 text-center">Criar Conta</h2>
            <p className="text-zinc-500 text-center mb-8">Junte-se a nós e potencialize seus anúncios</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Nome Completo</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">E-mail</label>
                <input type="email" className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">WhatsApp</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" placeholder="(00) 00000-0000" />
              </div>
              <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition mt-2">
                Cadastrar-se
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-zinc-500">
              Já tem uma conta? 
              <a href="/auth/login">
  <Button variant="primary" className="px-5 py-2 text-sm">Entrar</Button>
</a>
            </div>
          </div>
        </div>
      </Layout>
    );
  });

  return app;
};