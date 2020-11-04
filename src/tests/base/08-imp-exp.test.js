import {getHeroeById,getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Test de 08-imp-exp',()=>{

    test('getHeroeById debe retornar un heroe segúnn id',()=>{

        const id = 1;
        const heroeExpected = heroes.find((heroe) => heroe.id === id);
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(heroeExpected);

    });

    test('getHeroeById debe retornar undefined si el heroe no existe',()=>{
        const id = 10;
        // const heroeExpected = heroes.find((heroe) => heroe.id === id);
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined)
    })

    test('getHeroesByOwner debe retornar los super de DC',()=>{
        const owner = 'DC';
        const heroesExpected = heroes.filter((heroe)=> heroe.owner === owner);
        const heroesTest = getHeroesByOwner(owner);

        expect(heroesTest).toEqual(heroesExpected);
    })
    test('getHeroesByOwner debe retornar los super de Marvel y verificar lenght = 2 ',()=>{
        const owner = 'Marvel';
        const heroesExpected = heroes.filter((heroe)=> heroe.owner === owner);
        const heroesTest = getHeroesByOwner(owner);

        expect(heroesTest).toEqual(heroesExpected);
        expect(heroesTest.length).toBe(2)
    })
})