interface OrderStatusBadgeProps {
  status: 'approved' | 'pending';
}

export const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  const isApproved = status === 'approved';
  return (
    <span className={`px-3 py-1 rounded text-xs font-bold ${
      isApproved 
        ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
        : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
    }`}>
      {isApproved ? 'PAGAMENTO APROVADO' : 'PENDENTE'}
    </span>
  );
};
