/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { createPDF } from './api';
import { act } from 'react-dom/test-utils';

jest.mock('./api');

describe('App component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Renders input fields and button', async () => {
    await act(async () => render(<App />));
    const titleInput = screen.getByPlaceholderText('Enter title');
    const contentInput = screen.getByPlaceholderText('Enter text to convert');
    const convertButton = screen.getByText('Convert to PDF');

    expect(titleInput).toBeInTheDocument();
    expect(contentInput).toBeInTheDocument();
    expect(convertButton).toBeInTheDocument();
  });

  test('Updates input fields on change', async () => {
    await act(async () => render(<App />));
    const titleInput = screen.getByPlaceholderText('Enter title');
    const contentInput = screen.getByPlaceholderText('Enter text to convert');

    fireEvent.change(titleInput, { target: { value: 'Test title' } });
    fireEvent.change(contentInput, { target: { value: 'Test content' } });

    expect(titleInput).toHaveValue('Test title');
    expect(contentInput).toHaveValue('Test content');
  });

  test('Calls createPDF and updates state on button click', async () => {
    render(<App />);

    const titleInput = screen.getByPlaceholderText('Enter title');
    const contentInput = screen.getByPlaceholderText('Enter text to convert');
    const convertButton = screen.getByText('Convert to PDF');

    await act(async () => {
      fireEvent.change(titleInput, { target: { value: 'Test title' } });
      fireEvent.change(contentInput, { target: { value: 'Test content' } });
      fireEvent.click(convertButton);
    });

    expect(createPDF).toHaveBeenCalledWith('Test content');
  });
});
