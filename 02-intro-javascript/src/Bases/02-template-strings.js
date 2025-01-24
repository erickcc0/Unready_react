

const nombre = 'alejandro';
const apellido = 'vilca';

const nombreCompleto = `
${ nombre } 
${ apellido }
`;
// ``` alt+9(numeral)+6(numeral) = `` 

console.log( nombreCompleto);


function getSaludo() {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre) } `)

