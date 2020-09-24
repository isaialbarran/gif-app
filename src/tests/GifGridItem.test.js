import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('Pruebas en <GifGridItem', () => {
  const title = 'Add tittle';
  const url = 'https://www.google.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('debe de mostrar <GifGridItem/> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe de tener una imagen con el alt y url de los props', () => {
    const img = wrapper.find('img');
    // console.log(img.prop('src'));
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe de tener animate__fadeInLeftBig', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('animate__fadeInLeftBig')).toBe(true);
  });
});
