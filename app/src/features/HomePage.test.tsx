import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './HomePage';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

const mockUseCategoryMock = jest.fn()
jest.mock("../hooks/useCategory", () => ({
  useCategory: () => mockUseCategoryMock(),
}));

beforeAll(() => {
  jest.mock("react-router-dom", () => ({
    useParams: jest.fn(),
  }));
})

describe("<Home />", () => {
  it("displays loading state", () => {
    mockUseCategoryMock.mockReturnValue({
      data: { total: undefined, entries: undefined },
      isFetching: true,
      error: null,
    });
    const route = '/some-route'

    render(
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>,
    )
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays wrong state 2", () => {

    jest.mock("../hooks/useCategory", () => ({
      useCategory: () => mockUseCategoryMock(),
    }));

    mockUseCategoryMock.mockReturnValue({
      data: { total: undefined, entries: undefined },
      isFetching: false,
      error: 'error',
    });
    const route = '/'

    render(
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>,
    )
    expect(screen.getByText("Oops, something went wrong...")).toBeInTheDocument();
  });
})