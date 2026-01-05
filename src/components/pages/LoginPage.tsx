import { AuthTemplate } from '../templates/AuthTemplate.tsx';
import { LoginForm } from '../organisms/auth/LoginForm.tsx';

interface LoginPageProps {
  error?: string;
}

export const LoginPage = ({ error }: LoginPageProps) => {
  return (
    <AuthTemplate title="Entrar - Adsly">
        <LoginForm error={error} action="/auth/login" />
    </AuthTemplate>
  );
};