import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" onClick={onClick}>
      {children}
    </button>
  );
};
