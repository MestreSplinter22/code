import { Button } from '../../atoms/Button.tsx';
import { FormField } from '../../molecules/FormField.tsx';

interface LoginFormProps {
  error?: string;
  action: string;
  method?: string;
}

export const LoginForm = ({ error, action, method = "POST" }: LoginFormProps) => {
  return (
    <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      {/* Detalhe Decorativo (pode virar um átomo se usado em outros lugares) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>

      <h2 className="text-3xl font-bold text-white mb-2 text-center">Bem-vindo de volta</h2>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 p-3 mb-4 rounded text-center text-sm text-red-400">
            {error}
        </div>
      )}

      <form method={method as any} action={action} className="space-y-5">
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

        <Button type="submit" variant="primary" fullWidth>
          Entrar na Conta
        </Button>
      </form>

      <div className="mt-8 text-center text-sm text-zinc-500">
        Não tem uma conta? 
        <a href="/auth/register" className="text-yellow-500 font-bold hover:underline ml-1">Criar agora</a>
      </div>
    </div>
  );
};