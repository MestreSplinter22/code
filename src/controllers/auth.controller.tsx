// src/controllers/auth.controller.tsx
import { Hono } from 'hono';
import { setCookie, deleteCookie } from 'hono/cookie';
import { AuthService } from '../modules/auth/auth.service.ts';
import { LoginPage } from '../components/pages/LoginPage.tsx';
// Supondo que você também refatore a RegisterPage de forma similar:
// import { RegisterPage } from '../components/pages/RegisterPage.tsx';

export const createAuthController = (authService: AuthService) => {
  const app = new Hono();

  // 1. Logout
  app.get('/logout', (c) => {
    deleteCookie(c, 'auth_token');
    return c.redirect('/');
  });

  // 2. Página de Login (GET) - AGORA USANDO O COMPONENTE PAGE
  app.get('/login', (c) => {
    return c.html(<LoginPage />);
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
        // Retorna a página de login novamente com erro (necessário ajustar LoginPage para receber props de erro)
        return c.html(<LoginPage error="Usuário ou senha inválidos" />, 401);
    }
  });

  // 4. Página de Registro
  app.get('/register', (c) => {
     // Idealmente, você deve criar src/components/pages/RegisterPage.tsx e usar aqui
     // return c.html(<RegisterPage />);
     return c.text("Página de registro (TODO: Refatorar para RegisterPage)");
  });

  return app;
};