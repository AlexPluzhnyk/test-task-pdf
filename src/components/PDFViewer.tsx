import { FC, memo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string;
}

const PDFViewer: FC<PDFViewerProps> = memo(({ file }) => {
  return (
    <div className="border-2 shadow-lg ring-1 ring-gray-900/5">
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
});

export default PDFViewer;
