import type { ReactNode } from 'react';
import './styles.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, className = '', ...rest }: ButtonProps) {
  return (
    <button className={`btn-bater-ponto ${className}`} {...rest}>
      {children}
    </button>
  );
}