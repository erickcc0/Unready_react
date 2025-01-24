import { getHeroeById } from './Bases/08-imp'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {

//         const p1 = getHeroeById(2);
//         resolve(p1);
//         // resolve('No se pudo encontrar el héroe');

//     },2000);

// }) ;

// promesa.then( (heroe) => {

//     console.log('Héroe', heroe);

// })

// .catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
    
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1); 
            } else {
                reject('No se pudo encontrar el héroe con ID'); 
            }
        },2000);
    
    }) ;

}

getHeroeByIdAsync(1) 
    .then(console.log)
    .catch(console.warn);
