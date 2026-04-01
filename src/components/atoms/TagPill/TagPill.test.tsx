import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TagPill from './TagPill';

describe('TagPill', () => {
  it('renders the label text', () => {
    render(<TagPill label="React" onRemove={() => {}} />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders the × remove button', () => {
    render(<TagPill label="React" onRemove={() => {}} />);
    expect(screen.getByRole('button', { name: 'Remove tag React' })).toBeInTheDocument();
  });

  it('calls onRemove when the × button is clicked', async () => {
    const handleRemove = jest.fn();
    render(<TagPill label="React" onRemove={handleRemove} />);
    await userEvent.click(screen.getByRole('button', { name: 'Remove tag React' }));
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });
});
