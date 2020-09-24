import React from 'react';
import '@testing-library/jest-dom';

const { shallow } = require('enzyme');
import { GifGrid } from '../components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs');

describe('GifGrid test components', () => {
  const category = 'Vegeta';

  test('Match component with snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show item when images are loaded', () => {
    const gifs = [
      { id: 'ABC', url: 'https://localhost.jpg', title: 'Cualq cosa' },
      { id: '123', url: 'https://localhost.jpg', title: 'Cualq cosa' },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
