import { render, screen } from '@testing-library/react';
import { Textbox } from './Textbox';

describe('Textbox', () => {
  it('should render', () => {
    render(<Textbox />);
    expect(screen.getByTestId('textbox')).toBeInTheDocument();
  });
});
