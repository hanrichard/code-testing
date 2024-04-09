import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { Layout } from './Layout';

test('renders Header correctly', () => {
  render(<MemoryRouter><Layout /></MemoryRouter>);
  const headerId = screen.getByTestId(/header/i);
  expect(headerId).toBeInTheDocument();
});
