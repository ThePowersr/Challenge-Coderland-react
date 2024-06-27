import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import useData from '../../../src/hooks/useData';
import ListScreen from '../../../src/components/pages/ListScreen';

jest.mock('../../../src/hooks/useData.ts');

describe('ListScreen component', () => {
  test('renders loading spinner when loading', () => {
    (useData as jest.Mock).mockReturnValueOnce({ users: undefined, loading: true, error: undefined });

    render(<ListScreen />);

    const spinnerElement = screen.getByTestId('spinner-component');

    expect(spinnerElement).toBeInTheDocument();
  });

  test('renders list of users when loaded', async () => {
    const mockUsers = [
      { id: '1', name: 'User 1' },
      { id: '2', name: 'User 2' },
    ];

    (useData as jest.Mock).mockReturnValueOnce({ users: mockUsers, loading: false, error: undefined });

    render(<ListScreen />);

    const userListElements = await screen.findAllByRole('listitem');

    expect(userListElements).toHaveLength(mockUsers.length);
    expect(screen.getByText('List of users')).toBeInTheDocument();
  });

  test('renders error message when there is an error', async () => {
    const errorMessage = 'Failed to fetch data';

    (useData as jest.Mock).mockReturnValueOnce({ users: undefined, loading: false, error: errorMessage });

    render(<ListScreen />);

    const errorElement = await screen.findByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
