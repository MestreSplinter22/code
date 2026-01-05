import { AuthTemplate } from '../templates/AuthTemplate.tsx';
import { AuthFormWrapper } from '../molecules/auth/AuthFormWrapper.tsx';
import { FormField } from '../molecules/FormField.tsx';

interface LoginPageProps {
  error?: string;
}

export const LoginPage = ({ error }: LoginPageProps) => {
  return (
    <AuthTemplate title="Entrar - Adsly">
        <AuthFormWrapper 
          title="Bem-vindo de volta"
          error={error} 
          action="/auth/login" 
          submitText="Entrar na Conta"
          footerText="Não tem uma conta?"
          footerLinkText="Criar agora"
          footerLinkUrl="/auth/register"
        >
          <FormField 
            label="E-mail"
            name="email"
            type="email"
            placeholder="admin@adsly.com"
            required
          />
          
          <FormField 
            label="Senha"
            name="password"
            type="password"
            placeholder="123456"
            required
            extraLabel={
              <a href="#" className="text-xs text-yellow-500 hover:underline">Esqueceu?</a>
            }
          />
        </AuthFormWrapper>
    </AuthTemplate>
  );
};
