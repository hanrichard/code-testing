import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './HomePage';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
const route = '/'

test('renders state', () => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <Home />
    </MemoryRouter>,
  )

  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
