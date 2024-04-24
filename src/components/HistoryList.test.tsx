import { render, screen, fireEvent } from '@testing-library/react';
import HistoryList from './HistoryList';

const mockList = [
  { id: '123', link: 'test', title: 'Test1' },
  { id: '345', link: 'test2', title: 'Test2' },
  { id: '567', link: 'test3', title: 'Test3' },
];

const mockOnOpenPDF = jest.fn();
const mockOnDelete = jest.fn();

describe('History list component component', () => {
  test('Renders history list component', async () => {
    render(
      <HistoryList
        list={mockList}
        onOpenPDF={mockOnOpenPDF}
        onDelete={mockOnDelete}
      />
    );
    const list = await screen.findByTestId('history-list');
    expect(list).toBeInTheDocument();
  });

  test('Delete one item in list', async () => {
    render(
      <HistoryList
        list={mockList}
        onOpenPDF={mockOnOpenPDF}
        onDelete={mockOnDelete}
      />
    );

    const listItems = await screen.findAllByTestId('list-item');

    const deleteButtons = await screen.findAllByTestId('delete-button');

    expect(listItems).toHaveLength(3);

    fireEvent.click(deleteButtons[0]);

    expect(mockOnDelete).toHaveBeenCalledWith('123');
  });
});
