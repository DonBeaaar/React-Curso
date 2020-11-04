import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas enn PrimeraApp", () => {
  // test('debe mostrar mensaje "Hola mundo"',()=>{

  //     const saludo = 'Hola mundo';
  //     const {getByText} = render(<PrimeraApp saludo={saludo} />);

  //     expect(getByText(saludo)).toBeInTheDocument()
  // });

  test("despliegue correcto de <PrimeraApp />", () => {
    const saludo = "Hola hola";

    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el subitutlo ennviado por props", () => {
    const saludo = "Hola hola";
    const subTitulo = "Subtitulo";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );

    // Le estoy diciendo que busque el o los elementos html <p/>
    // y que obtenga el texto del mismo
    const subTest = wrapper.find('p').text();

    expect(subTest).toBe(subTitulo);
  });
});
