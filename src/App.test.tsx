import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Tag Input heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /tag input/i });
  expect(heading).toBeInTheDocument();
});
