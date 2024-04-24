import { ChangeEvent, FC } from 'react';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <>
      <input
        name="title"
        className="w-full  border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Enter title"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
