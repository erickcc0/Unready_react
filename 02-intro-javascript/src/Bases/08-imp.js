import heroes from '../data/heroes';
// console.log( owners );

// const getHeroeById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if ( heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }
export const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id) ; 

// console.log( getHeroeById(2));

export const getHeroeByOwner = ( owner) => heroes.filter( ( heroe ) => heroe.owner === owner) ;

// console.log( getHeroeByOwner('DC'));