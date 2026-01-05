import { JSX } from 'hono/jsx';

interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className = '', ...props }: InputProps) => {
  const baseStyles = "w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed";
  
  return (
    <input 
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
};