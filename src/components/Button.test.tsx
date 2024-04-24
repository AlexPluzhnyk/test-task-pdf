import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';

describe('List component', () => {
  test('Renders button with correct text', () => {
    render(<Button text="Click me" callback={() => {}} isDisabled={false} />);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  test('Calls callback function when button is clicked', async () => {
    const mockCallback = jest.fn();
    render(<Button text="Convert" callback={mockCallback} isDisabled={true} />);
    const button = await screen.findByTestId('custom-button');
    fireEvent.click(button);

    expect(mockCallback).toHaveBeenCalled();
  });
});
