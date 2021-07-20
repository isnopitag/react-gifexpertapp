import React from "react";
import { GifExpertApp } from "../GifExpertApp";
import { shallow } from "enzyme";

describe("Pruebas en GifExpertApp", () => {
  
    test("debe de mostrar <GifExpertApp/>", () => {
      const wrapper = shallow(<GifExpertApp />);
  
      expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {

      const categories = ['Evangelion'];
      const wrapper = shallow(<GifExpertApp  defaultCategories={categories}/>);
      expect(wrapper).toMatchSnapshot();
      expect( wrapper.find('GifGrid').length ).toBe( categories.length );


    })
    

    
})