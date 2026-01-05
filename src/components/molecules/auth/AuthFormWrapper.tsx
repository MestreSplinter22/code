import { PropsWithChildren } from "hono/jsx";
import { Button } from '../../atoms/Button.tsx';

interface AuthFormWrapperProps extends PropsWithChildren {
  title: string;
  error?: string;
  action: string;
  method?: string;
  submitText?: string;
  footerText?: string;
  footerLinkText?: string;
  footerLinkUrl?: string;
}

export const AuthFormWrapper = ({ 
  children, 
  title, 
  error, 
  action, 
  method = "POST", 
  submitText = "Enviar",
  footerText,
  footerLinkText,
  footerLinkUrl
}: AuthFormWrapperProps) => {
  return (
    <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      {/* Detalhe Decorativo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>

      <h2 className="text-3xl font-bold text-white mb-2 text-center">{title}</h2>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 p-3 mb-4 rounded text-center text-sm text-red-400">
            {error}
        </div>
      )}

      <form method={method as any} action={action} className="space-y-5">
        {children}

        <Button type="submit" variant="primary" fullWidth>
          {submitText}
        </Button>
      </form>

      {footerText && (
        <div className="mt-8 text-center text-sm text-zinc-500">
          {footerText} 
          {footerLinkText && footerLinkUrl && (
            <a href={footerLinkUrl} className="text-yellow-500 font-bold hover:underline ml-1">{footerLinkText}</a>
          )}
        </div>
      )}
    </div>
  );
};
