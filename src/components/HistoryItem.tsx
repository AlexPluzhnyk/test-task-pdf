import { FC, MouseEventHandler } from 'react';
import DeleteButton from './DeleteButton';

interface HistoryItemProps {
  id: string;
  title: string;
  link: string;
  onOpenPDF: (link: string) => void;
  onDelete: (id: string) => void;
}

const HistoryItem: FC<HistoryItemProps> = ({
  id,
  title,
  link,
  onDelete,
  onOpenPDF,
}) => {
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    onDelete(id);
  };

  const handleOpenPdf: MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();

    onOpenPDF(link);
  };

  return (
    <li
      data-testid="list-item"
      className="w-full justify-between flex hover:bg-gray-50 border-b-2 border-gray-100 p-4"
      onClick={handleOpenPdf}
    >
      <span className="block rounded-lg py-2 pl-6 pr-3 text-m font-semibold leading-7 text-gray-900">
        {title}
      </span>
      <DeleteButton name="Delete" callback={handleDelete} />
    </li>
  );
};

export default HistoryItem;
