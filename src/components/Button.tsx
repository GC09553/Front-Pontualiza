import type { ReactNode } from 'react';

type ButtonVariant = 'blue' | 'green' | 'outline-blue' | 'outline-green';

interface ButtonProps {
  children: ReactNode
  variant: ButtonVariant
  showArrow?: boolean
}

export default function Button({ children, variant, showArrow = false }: ButtonProps) {
  const isOutline = variant.startsWith('outline');

  return (
    <button
      type="button"
      className={`btn${isOutline ? ' btn-outline' : ''} btn-${variant}`}
    >
      {children}
      {showArrow && <span aria-hidden="true">→</span>}
    </button>
  );
}
