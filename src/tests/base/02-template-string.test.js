const { getSaludo } = require("../../base/02-template-string");

describe("Pruebas 02-template-string", () => {
  test('Debe retornar "Hola + nombre"', () => {
    const nombre = "Felipe";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });
  test('getSaludo debe retornar "Hola Carlos si no hay argumento"', () => {
    // const saludo = getSaludo();
    expect(getSaludo()).toBe("Hola Carlos");
  });
});
