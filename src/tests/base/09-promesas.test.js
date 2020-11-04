import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Test 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un heroe en async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroeTest) => {
      expect(heroeTest).toEqual(heroes.find((heroe) => heroe.id === id));
      done();
    });
  });

  test('getHeroeByIdAsync debe retornar un error cuando el heroe no exista',(done)=>{
      const id = 10;
      getHeroeByIdAsync(id)
        .catch((error)=>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
  })
});
