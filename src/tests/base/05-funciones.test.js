import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Test de 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userExpected = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    // Comparar objetos
    expect(user).toEqual(userExpected);
  });

  test("getUsuarioActivo debe retornar el objeto con el nombre que se manda", () => {
    const nombre = "Felipe";
    const userActivo = getUsuarioActivo(nombre);
    expect(userActivo).toEqual({
        uid: "ABC567",
      username: nombre,
    });
  });
});
