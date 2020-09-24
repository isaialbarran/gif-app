import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require('enzyme');
import { AddCategory } from '../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe de postear la informacion', () => {
    //preventDefault() => {}
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe de llamar el setCategories y limpiar la caja de texto ', () => {
    const value = 'goku';
    //1. simular el inputChange
    wrapper.find('input').simulate('change', { target: { value } });
    //2. simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    //3. setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled;
    //4. el valoer del input debe de estar ''
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
