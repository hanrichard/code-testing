import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

const mockUseCategoryMock = jest.fn()
jest.mock("../hooks/useCategory", () => ({
  useCategory: () => mockUseCategoryMock(),
}));

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

describe("<Home />", () => {
  it("displays loading state", () => {
    mockUseCategoryMock.mockReturnValue({
      data: { total: undefined, entries: undefined },
      isFetching: true,
      error: null,
    });

    render(<Home />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
})