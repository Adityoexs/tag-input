import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TagInput from './TagInput';

describe('TagInput', () => {
  it('renders with the given value', () => {
    render(<TagInput value="hello" onChange={() => {}} onKeyDown={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue('hello');
  });

  it('calls onChange when the input value changes', async () => {
    const handleChange = jest.fn();
    render(<TagInput value="" onChange={handleChange} onKeyDown={() => {}} />);
    await userEvent.type(screen.getByRole('textbox'), 'R');
    expect(handleChange).toHaveBeenCalledWith('R');
  });

  it('calls onKeyDown on key press', async () => {
    const handleKeyDown = jest.fn();
    render(<TagInput value="" onChange={() => {}} onKeyDown={handleKeyDown} />);
    await userEvent.type(screen.getByRole('textbox'), '{enter}');
    expect(handleKeyDown).toHaveBeenCalled();
  });
});
