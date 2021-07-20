import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas con AddCategory", () => {
  
    const setCategories = jest.fn();
  
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach( ()=>{
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de cambiar la caja de texto', () => {
      const input = wrapper.find('input');
      const value = 'Hola Mundo';

      input.simulate('change', {  target: { value } });

      expect(wrapper.find('p').text().trim()).toBe(value);
 
  })
  
  test('No debe de postear la informacion con submit', () => {
     wrapper.find('form').simulate('submit', { preventDefault(){} });

     expect(setCategories).not.toHaveBeenCalled();
  })

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
      const value = 'Hola Mundo';
     //simular el inputChange
      wrapper.find('input').simulate('change', { target:{value}});
      //simular el submit
      wrapper.find('form').simulate('submit', {preventDefault(){}})
      //setCategories se debe haber llamado
      expect(setCategories).toHaveBeenCalled();
      //el valor del inputo debe estar ''
      expect(wrapper.find('input').prop('value')).toBe('');
  })
  
  

})
