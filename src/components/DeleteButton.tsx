import { FC, MouseEventHandler } from 'react';

interface DeleteButtonProps {
  name: string;
  callback: MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton: FC<DeleteButtonProps> = ({ name, callback }) => {
  return (
    <>
      <button
        data-testid="delete-button"
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-100"
        onClick={callback}
      >
        {name}
      </button>
    </>
  );
};

export default DeleteButton;
