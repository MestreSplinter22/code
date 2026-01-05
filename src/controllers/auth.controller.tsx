import { Hono } from 'hono';
import { setCookie } from 'hono/cookie';
import { Layout } from '../components/templates/Layout.tsx';
import { Navbar } from '../components/organisms/Navbar.tsx';
import { AuthService } from '../modules/auth/auth.service.ts'; // Certifique-se que o caminho está correto

// Injetando o AuthService como dependência
export const createAuthController = (authService: AuthService) => {
  const app = new Hono();

  // Rota: GET /auth/login (Exibe o formulário)
  app.get('/login', (c) => {
    return c.html(
      <Layout title="Entrar - Adsly">
        <Navbar />
        <div class="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
          <div class="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>

            <h2 class="text-3xl font-bold text-white mb-2 text-center">Bem-vindo de volta</h2>
            
            {/* Box de Teste */}
            <div class="bg-yellow-500/10 border border-yellow-500/20 p-2 mb-6 rounded text-center text-xs text-yellow-500">
               Teste: <b>admin@adsly.com</b> | Senha: <b>123456</b>
            </div>

            <form method="POST" action="/auth/login" class="space-y-5">
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1.5">E-mail</label>
                <input 
                  name="email" 
                  type="email" 
                  required
                  class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" 
                  placeholder="seu@email.com" 
                />
              </div>
              
              <div>
                <div class="flex justify-between mb-1.5">
                    <label class="block text-sm font-medium text-gray-400">Senha</label>
                    <a href="#" class="text-xs text-yellow-500 hover:underline">Esqueceu?</a>
                </div>
                <input 
                  name="password" 
                  type="password" 
                  required
                  class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" 
                  placeholder="••••••••" 
                />
              </div>

              <button type="submit" class="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition shadow-[0_0_10px_rgba(234,179,8,0.2)]">
                Entrar na Conta
              </button>
            </form>

            <div class="mt-8 text-center text-sm text-zinc-500">
              Não tem uma conta? 
              <a href="/auth/register" class="text-yellow-500 font-bold hover:underline ml-1">Criar agora</a>
            </div>
          </div>
        </div>
      </Layout>
    );
  });

  // Rota: POST /auth/login (Processa o login)
  app.post('/login', async (c) => {
    const body = await c.req.parseBody();
    const email = body['email'] as string;
    const password = body['password'] as string;

    const isValid = await authService.validateUser(email, password);

    if (isValid) {
        // Define o cookie de sessão (simulado com 'true_token_secret')
        setCookie(c, 'auth_token', 'true_token_secret', { 
            path: '/', 
            httpOnly: true,
            maxAge: 60 * 60 * 24 // 1 dia
        });
        return c.redirect('/dashboard/my-orders');
    } else {
        // Em caso de erro, por enquanto retornamos um texto simples
        // Poderia ser um redirect com parâmetro de erro
        return c.text('Usuário ou senha inválidos', 401);
    }
  });

  // Rota: GET /auth/register
  app.get('/register', (c) => {
    return c.html(
      <Layout title="Criar Conta - Adsly">
        <Navbar />
        <div class="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
          <div class="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative">
            
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>

            <h2 class="text-3xl font-bold text-white mb-2 text-center">Criar Conta</h2>
            <p class="text-zinc-500 text-center mb-8">Junte-se a nós e potencialize seus anúncios</p>

            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1.5">Nome Completo</label>
                <input type="text" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" placeholder="Seu nome" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1.5">E-mail</label>
                <input type="email" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" placeholder="seu@email.com" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1.5">Senha</label>
                <input type="password" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" placeholder="Crie uma senha forte" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1.5">WhatsApp</label>
                <input type="text" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition" placeholder="(00) 00000-0000" />
              </div>

              <button class="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition shadow-[0_0_10px_rgba(234,179,8,0.2)] mt-2">
                Cadastrar-se
              </button>
            </form>

            <div class="mt-6 text-center text-sm text-zinc-500">
              Já tem uma conta? 
              <a href="/auth/login" class="text-yellow-500 font-bold hover:underline ml-1">Entrar</a>
            </div>
          </div>
        </div>
      </Layout>
    );
  });

  return app;
};