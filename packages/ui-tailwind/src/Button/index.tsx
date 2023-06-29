import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

export const Button = ({ children, className = '', onClick }: ButtonProps) => {
  return (
    <button
      className={`rounded bg-blue-500 px-3 py-1.5 text-sm font-bold text-white hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
