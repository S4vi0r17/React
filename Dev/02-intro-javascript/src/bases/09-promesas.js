// Promises: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import { getHeroeById } from './bases/08-imp-exp'

// Por naturaleza las promesas son asíncronas
// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // Tarea
//         // importen el 
//         const p1 = getHeroeById(2);
//         resolve(p1);
//         // reject( 'No se pudo encontrar el héroe' );
//     }, 2000)

// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
//     .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // Tarea
            // importen el 
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000)

    });

}


getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);

// Es un tip 👆