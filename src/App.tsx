import { useState, ChangeEvent } from 'react';
import PDFViewer from './components/PDFViewer';
import Button from './components/Button';
import { createPDF } from './api';
import useLocalStorageState from './hooks/useLocalStorageState';
import { PDF_LOCAL_STORAGE_KEY } from './models/constants';
import HistoryList from './components/HistoryList';
import { getUniqueId } from './utils';
import { PdfHistoryRecord } from './models/types';
import Input from './components/Input';
import Textarea from './components/Textarea';

const initialForm = { title: '', content: '' };

const App = () => {
  const [documentForm, setDocumentForm] = useState(initialForm);
  const [activeDocument, setActiveDocument] = useState('');

  /** In real project should use state manager or use api call */

  const { state: pdfHistory, setState: setPdfHistory } = useLocalStorageState<
    PdfHistoryRecord[]
  >(PDF_LOCAL_STORAGE_KEY, []);

  const onFieldChangeHandler = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDocumentForm((doc) => {
      return { ...doc, [name]: value };
    });
  };

  const handleConvert = async () => {
    const pdf = await createPDF(documentForm.content);

    if (!pdf) {
      return;
    }

    setActiveDocument(pdf);
    setPdfHistory([
      ...pdfHistory,
      {
        id: getUniqueId(),
        link: pdf,
        title: documentForm.title,
      },
    ]);
    setDocumentForm(initialForm);
  };

  const handleDelete = (id: string) => {
    const filterData = pdfHistory.filter((item) => item.id !== id);

    setPdfHistory(filterData);
  };

  const handleOpenPDF = (file: string) => {
    setActiveDocument(file);
  };

  return (
    <div className="flex  justify-center min-h-screen p-20">
      <div className="w-1/2 p-4">
        <div className="border-2 shadow-lg ring-1 ring-gray-900/5 p-8">
          <Input value={documentForm.title} onChange={onFieldChangeHandler} />
          <Textarea
            value={documentForm.content}
            onChange={onFieldChangeHandler}
          />
          <Button
            isDisabled={
              !!documentForm.content.length && !!documentForm.title.length
            }
            text="Convert to PDF"
            callback={handleConvert}
          />
        </div>
        <div className="flex flex-col items-center border-2 shadow-lg ring-1 ring-gray-900/5 mt-8 min-h-32 max-h-96 overflow-auto ">
          <HistoryList
            list={pdfHistory}
            onDelete={handleDelete}
            onOpenPDF={handleOpenPDF}
          />
        </div>
      </div>
      <div className="w-1/2 p-4">
        <PDFViewer file={activeDocument} />
      </div>
    </div>
  );
};

export default App;
