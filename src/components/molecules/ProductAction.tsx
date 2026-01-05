import { Button } from '../atoms/Button.tsx';
import { Icon } from '../atoms/Icon.tsx';

interface ProductActionProps {
  isSoldOut: boolean;
}

export const ProductAction = ({ isSoldOut }: ProductActionProps) => {
  return (
    <Button
      variant={isSoldOut ? 'ghost' : 'outline'}
      fullWidth
      disabled={isSoldOut}
    >
      {isSoldOut ? 'Esgotado' : (
        <>
          <Icon name="cart" />
          Comprar agora
        </>
      )}
    </Button>
  );
};
