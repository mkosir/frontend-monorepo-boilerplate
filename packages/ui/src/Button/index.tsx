import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: '#3b82f6',
        padding: '5px 15px',
        whiteSpace: 'nowrap',
        borderRadius: '3px',
        boxShadow: '0 2px 4px 0 #3d9cc23b',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
