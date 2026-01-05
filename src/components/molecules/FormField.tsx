import { Input } from '../atoms/Input.tsx';
import { JSX } from 'hono/jsx';

interface FormFieldProps extends JSX.HTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  extraLabel?: JSX.Element; // Para o link "Esqueceu?"
}

export const FormField = ({ label, name, error, extraLabel, className, ...props }: FormFieldProps) => {
  return (
    <div className={className}>
      <div className="flex justify-between mb-1.5">
        <label htmlFor={name} className="block text-sm font-medium text-gray-400">
          {label}
        </label>
        {extraLabel && extraLabel}
      </div>
      
      <Input 
        id={name} 
        name={name} 
        {...props} 
      />
      
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};