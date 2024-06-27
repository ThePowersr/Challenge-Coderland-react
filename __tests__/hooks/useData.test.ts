import { renderHook } from '@testing-library/react-hooks';
import useData from '../../src/hooks/useData';
import { fetchElements } from '../../src/services/apiService';

function suppressConsoleWarnings() {
  //const originalError = console.error;
  console.error = (...args: any[]) => {
    if (
      args.length > 0 &&
      typeof args[0] === 'string' &&
      (
        args[0].includes('Warning: ReactDOM.render is no longer supported') ||
        args[0].includes('Warning: unmountComponentAtNode is deprecated and will be removed') ||
        args[0].includes('Warning: An update to TestComponent inside a test was not wrapped in act')
      )
    ) {
      return;
    }
  };
}

beforeAll(() => {
  suppressConsoleWarnings();
});

jest.mock('../../src/services/apiService');

describe('useData hook', () => {
  it('should return initial state', async () => {
    const { result } = renderHook(() => useData());

    expect(result.current.users).toBeUndefined();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('should fetch data successfully', async () => {
    const mockUsers = [
      { id: '1', name: 'User 1' },
      { id: '2', name: 'User 2' },
    ];

    (fetchElements as jest.Mock).mockResolvedValueOnce(mockUsers);

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    expect(result.current.users).toEqual(mockUsers);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle error during fetch', async () => {
    const errorMessage = 'Failed to fetch data';

    (fetchElements as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    expect(result.current.users).toBeUndefined();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(errorMessage);
  });

  it('should handle unknown error during fetch', async () => {
    (fetchElements as jest.Mock).mockRejectedValueOnce('unknown error');

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    expect(result.current.users).toBeUndefined();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('An unknown error occurred');
  });
});