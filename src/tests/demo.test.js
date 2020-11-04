// Agrupador y titulador de las pruebas
describe("Demo.test.js", () => {
  test("debe ser true", () => {
    // 1. inicializacion
    const mensaje = "Hola mundo";

    // 2.estimulo
    const mensaje2 = `Hola mundo`;

    // 3.observacion

    expect(mensaje2).toBe(mensaje);
  });
});
