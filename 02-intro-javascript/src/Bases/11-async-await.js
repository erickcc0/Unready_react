

// const getImagenPromesaa = () => 
//     new Promise (resolve => resolve('https:/ahsdkasdahsdakjs.com'))
// getImagenPromesaa().then( console.log );

const getImagen = async () => {

    try {
        const apiKey = '9T0wAdzPb20603uJ6z0EsguUzaWg9AZx'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
       
        const img = document.createElement('img');
            img.src = url;
    
            document.body.append( img );


    } catch (error){
        
    }





   
}
getImagen();


