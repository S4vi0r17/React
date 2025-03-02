// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes, { owners } from '../data/heroes';

console.log(owners);


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// find: devuelve el primer elemento que cumpla la condición, en este caso un objeto

// console.log( getHeroeById(2) );


// find?, filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );