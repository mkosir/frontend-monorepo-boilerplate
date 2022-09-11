export type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2.5 bg-gradient-to-r from-brandRed to-brandGreen text-white font-medium text-xs leading-tight rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
    >
      {text}
      <span className="ml-2 bg-white bg-clip-text text-transparent">→</span>
    </button>
  );
};
