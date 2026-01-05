// src/components/atoms/Button.tsx
import { PropsWithChildren } from 'hono/jsx';

interface ButtonProps extends PropsWithChildren {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger' | 'whatsapp'; // Adicionei 'whatsapp' pois vi um botão verde no seu código
  fullWidth?: boolean;
  className?: string;
  [key: string]: any; // Para aceitar onClick, type="submit", etc.
}

export const Button = ({ children, variant = 'primary', fullWidth, className, ...props }: ButtonProps) => {
  const baseStyle = "font-bold py-3 px-6 rounded-lg transition shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.2)]",
    outline: "bg-transparent border border-yellow-600 text-yellow-500 hover:bg-yellow-500 hover:text-black",
    ghost: "bg-transparent text-gray-300 hover:text-white",
    danger: "text-red-500 border border-red-900/50 hover:bg-red-900/20",
    whatsapp: "bg-green-600 text-white hover:bg-green-500" // Do banner "Não encontrou?"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${widthClass} ${className || ''}`} 
      {...props}
    >
      {children}
    </button>
  );
};