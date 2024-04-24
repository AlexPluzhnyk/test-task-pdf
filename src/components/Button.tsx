import { FC } from 'react';

interface ButtonProps {
  text: string;
  isDisabled: boolean;
  callback: () => void;
}

export const Button: FC<ButtonProps> = ({
  text,
  callback,
  isDisabled = false,
}) => {
  return (
    <button
      data-testid="custom-button"
      disabled={!isDisabled}
      onClick={callback}
      className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg ${
        !isDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
