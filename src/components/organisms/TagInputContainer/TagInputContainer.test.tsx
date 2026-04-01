import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TagInputContainer from './TagInputContainer';

describe('TagInputContainer', () => {
  it('renders the input field', () => {
    render(<TagInputContainer />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('adds a tag when Enter is pressed with valid text and clears the input', async () => {
    render(<TagInputContainer />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'React{enter}');
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('does not add an empty tag', async () => {
    render(<TagInputContainer />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '{enter}');
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('does not add a whitespace-only tag', async () => {
    render(<TagInputContainer />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '   {enter}');
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('does not add a duplicate tag', async () => {
    render(<TagInputContainer />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'React{enter}');
    await userEvent.type(input, 'React{enter}');
    expect(screen.getAllByText('React')).toHaveLength(1);
  });

  it('removes a tag when the × button is clicked', async () => {
    render(<TagInputContainer />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'React{enter}');
    expect(screen.getByText('React')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Remove tag React' }));
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });
});
