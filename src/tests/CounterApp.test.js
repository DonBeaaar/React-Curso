import React from "react";
import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';

describe("Pruebas a CounterApp", () => {
  test("Debe renderizar CounterApp correctamente", () => {
    const wrapper = shallow(<CounterApp value={0} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Verificar que el valor por defecto sea 100",()=>{
    const defaultValue = 100;
    // Cuando se comparan textos siempre asegurarse de quitar los espacios con .trim()
    const wrapper = shallow(<CounterApp/>).find('h2').text().trim();
    
    expect(wrapper).toEqual(`Valor : ${defaultValue}`);
  })
});
