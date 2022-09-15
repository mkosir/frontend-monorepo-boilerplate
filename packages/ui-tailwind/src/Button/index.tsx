export type ButtonProps = {
  text: string;
  className?: string;
  onClick: () => void;
};

export const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
      ${
        className ?? ''
      }from-brand-blue to-brand-green hover:from-primary-600 rounded bg-gradient-to-r px-6 py-2.5 text-xs font-medium leading-tight text-white shadow-md transition duration-200 ease-in-out hover:scale-110 hover:to-green-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg`}
    >
      {text}
    </button>
  );
};
