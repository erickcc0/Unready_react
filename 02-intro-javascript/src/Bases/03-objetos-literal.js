

const persona = {
    nombre: 'Tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 446454664,
        lat: 15.312323,
        lng: 36.542324,
    }
};



    const persona2 = { ...persona}
    persona2.nombre = 'Peter';


    console.log( persona );
    console.log(persona2)

