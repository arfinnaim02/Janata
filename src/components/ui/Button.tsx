import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ href, onClick, children, variant = 'primary', className }: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-colors duration-200';
  const variantClasses =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-green'
      : 'bg-white text-primary hover:bg-gray-100';
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className || ''}`}>
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
    >
      {children}
    </button>
  );
}