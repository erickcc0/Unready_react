
// //desestructuracion
// //asignacion desestructurante

// const persona = {
//     nombre: 'tony',
//     edad: '45',
//     clave: 'Ironman',
//     rango: 'leder',

// };

// const { nombre, edad, clave} = persona;


// // console.log( nombre);
// // console.log( edad);
// // console.log( clave);

// const useContext = ({ clave, nombre, edad, rango = 'Captein' }) => {

//     // console.log( nombre, edad, rango );

//     return {

//         nombreClave: clave,
//         anios: edad,
//     }
// }

// // retornaPersona( persona );

// const avenger = useContext( persona );

// console.log ( avenger )


const persona = {
    nombre: 'tony',
    edad: '45',
    clave: 'Ironman',
    rango: 'leder',
};

const useContext = ({ clave, nombre, edad, rango = 'Captein' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:14.1231,
            lng: -62.6435,
        }
    };
};

// const avenger = useContext(persona);

// console.log(nombreClave, anios);

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);
console.log(nombreClave, anios, lat, lng);