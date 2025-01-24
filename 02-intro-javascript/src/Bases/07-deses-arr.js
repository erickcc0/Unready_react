

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3  ] = personajes
console.log( p3 );


const retornaArreglo = () =>{
    return ['ABC', 123];
}


const [ letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola mundo' ) } ];
}


//1. elprimer valor del arr se llmara nombre
//2. se llamara setnombre
// const arr = useState( 'goku' );

// console.log( arr = 'nombre' )
// setNombre();

const [ nombre, setNombre ] = useState('goku');

console.log(nombre); // goku
setNombre(); // Hola mundo