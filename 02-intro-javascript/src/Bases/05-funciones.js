

    // const saludar = function( nombre ) {
    //     return `Hola, ${ nombre }`;
    // }

    const saludar2 = ( nombre ) => {
        return `Hola, ${ nombre }`;
    }

    const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
    const saludar4 = () => `Hola Mundo`;



    console.log( saludar2('Vegeetaaa, elmascapitos') )
    console.log( saludar3('koku') )
    console.log( saludar4('koku') )


    const getUser = () => ({
        uid: 'ABC123',
        username: 'El_papi1551'    
    })

    const user = getUser();
    console.log(user);


    //homewolk
    //1. transforma una funcion a flecha
    //2. tiene q retornar un ibjeto implicito
    //3. pruebas

    const getUsuarioActivo = ( nombre ) => {
        return `ABC567, ${nombre}`;
    }
    
    // console.log( getUsuarioActivo('alejandro') )



    const usuarioActivo = getUsuarioActivo('Alejandro');
    console.log( usuarioActivo );







