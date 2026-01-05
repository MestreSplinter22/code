import { formatCurrency } from '../../../utils/formatCurrency.ts';
import { OrderStatusBadge } from './OrderStatusBadge.tsx';
import { CredentialList, CredentialsProps } from './CredentialList.tsx';

export interface OrderCardProps {
  id: string;
  status: 'approved' | 'pending';
  purchaseDate: string;
  price: number;
  productName: string;
  credentials: CredentialsProps;
}

export const OrderCard = ({ id, status, purchaseDate, price, productName, credentials }: OrderCardProps) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition">
      {/* Header do Card */}
      <div className="bg-zinc-950/50 p-4 border-b border-zinc-800 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <OrderStatusBadge status={status} />
          <span className="text-zinc-400 text-sm">Pedido {id}</span>
          <span className="text-zinc-500 text-sm">• {purchaseDate}</span>
        </div>
        <div className="text-white font-bold">{formatCurrency(price)}</div>
      </div>

      {/* Detalhes e Credenciais */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">{productName}</h3>
        <CredentialList credentials={credentials} />
      </div>
    </div>
  );
};
