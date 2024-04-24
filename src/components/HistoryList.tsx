import { FC } from 'react';
import HistoryItem from './HistoryItem';
import { PdfHistoryRecord } from '../models/types';

interface HistoryListProps {
  list: PdfHistoryRecord[] | [];
  onOpenPDF: (link: string) => void;
  onDelete: (id: string) => void;
}

const HistoryList: FC<HistoryListProps> = ({ list, onOpenPDF, onDelete }) => {
  const content = list.length ? (
    <ul className="mt-2 w-full p-4" data-testid="history-list">
      {list?.map(({ id, link, title }: PdfHistoryRecord) => (
        <HistoryItem
          key={id}
          id={id}
          link={link}
          title={title}
          onDelete={onDelete}
          onOpenPDF={onOpenPDF}
        />
      ))}
    </ul>
  ) : (
    <span className="block pt-4 text-xl">You don't have history</span>
  );

  return (
    <>
      <h2
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-2"
        data-testid="history-title"
      >
        History
      </h2>
      {content}
    </>
  );
};
export default HistoryList;
