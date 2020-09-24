import { useFetchGifs } from '../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Test in useFetchGifs hooks', () => {
  test('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return and array of images en loading should be false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
