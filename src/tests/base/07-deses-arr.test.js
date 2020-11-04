import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test('retornaArreglo debe retornar ["ABC",123]', () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(numeros).toBe(123);
  });
});
