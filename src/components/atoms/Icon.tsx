import { 
  CartIcon, 
  SearchIcon, 
  UserIcon, 
  MenuIcon, 
  CloseIcon 
} from './icons/index.tsx';

// Re-export specific icons for direct usage if needed
export * from './icons/index.tsx';

interface IconProps {
  name: 'cart' | 'search' | 'user' | 'menu' | 'close';
  className?: string;
}

/**
 * Facade component for icons. 
 * Allows usage like <Icon name="cart" /> while keeping implementation details separated.
 * For stricter atomic design, consider importing specific icons directly (e.g., <CartIcon />).
 */
export const Icon = ({ name, className }: IconProps) => {
  const iconMap = {
    cart: CartIcon,
    search: SearchIcon,
    user: UserIcon,
    menu: MenuIcon,
    close: CloseIcon
  };

  const IconComponent = iconMap[name];
  
  if (!IconComponent) return null;

  return <IconComponent className={className} />;
};
