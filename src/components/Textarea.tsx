import { ChangeEvent, FC } from 'react';

interface TextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextareaProps> = ({ value, onChange }) => {
  return (
    <>
      <textarea
        name="content"
        className="w-full h-32 border border-gray-300 rounded-lg p-2 mb-4"
        placeholder="Enter text to convert"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Textarea;
