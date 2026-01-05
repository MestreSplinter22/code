import { Layout } from '../templates/Layout.tsx';
import { Navbar } from '../organisms/Navbar.tsx';
import { LoginForm } from '../organisms/auth/LoginForm.tsx';

interface LoginPageProps {
  error?: string;
}

export const LoginPage = ({ error }: LoginPageProps) => {
  return (
    <Layout title="Entrar - Adsly" isAuthenticated={false}>
      <Navbar isAuthenticated={false} />
      
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
        {/* A página apenas decide ONDE o formulário aparece, não COMO ele é */}
        <LoginForm error={error} />
      </div>
    </Layout>
  );
};