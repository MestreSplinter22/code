export interface CredentialsProps {
  accessLogin: string;
  accessPass: string;
  backupCode?: string;
}

interface CredentialListProps {
    credentials: CredentialsProps;
}

export const CredentialList = ({ credentials }: CredentialListProps) => {
    return (
        <div className="bg-black/40 rounded-lg p-4 border border-zinc-800 relative">
          <div className="absolute -top-3 left-4 bg-zinc-800 text-zinc-300 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">
            Dados de Acesso
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-xs text-zinc-500 mb-1">Login / Usuário</label>
              <div className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-yellow-500 font-mono text-sm select-all">
                {credentials.accessLogin}
              </div>
            </div>
            <div>
              <label className="block text-xs text-zinc-500 mb-1">Senha</label>
              <div className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white font-mono text-sm select-all">
                {credentials.accessPass}
              </div>
            </div>
          </div>

          {credentials.backupCode && (
            <div className="mt-3 pt-3 border-t border-zinc-800/50">
              <label className="block text-xs text-zinc-500 mb-1">Código de Backup / 2FA</label>
              <span className="text-zinc-400 font-mono text-sm tracking-widest">{credentials.backupCode}</span>
            </div>
          )}
        </div>
    );
};
