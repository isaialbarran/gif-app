import React from 'react';
import { GifExpertApp } from '../GifExpertApp';
const { shallow } = require('enzyme');

describe('Test component <GifExpertApp>', () => {
  test('Should match with our snapShot', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show a list of categories', () => {
    const categories = ['Goku', 'Shinchan'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
