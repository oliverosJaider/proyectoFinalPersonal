//receta para consumir un appi con react

export async function serviciosCancionesTop(){


    //1. pa onde vas Y a que vas 
    //Escribir a url del servicio del API
    const URL="https://api.spotify.com/v1/artists/0vR2qb8m9WHeZ5ByCbimq2/top-tracks?market=US"

    //2. que operacion vas hacer en la base de datos
    //configurar la peticion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQBmYPYkKRrkWaSwAQLeF2T6nvnBy5UVPIkLGpuuczSWwAxM8pSvkB7MmMHGe-I7WrgtI6h5sMw58ANbvkUEGNWAoRwMRAUovGy7e6QezEnvlZMMGAADR4ETHKfjK_tiDzOU_1I4FUI95bMXkiHWonFsxPImMrlzq397-zP4xv0DkxYOWVKvxfiAQ5FB9WyabCU"}
}
    //3. NOS VAMOS AL RESTAURANTE
    //CONSUMIMOS EL API

    let respuesta=await fetch(URL, PETICION)
    let canciones=await respuesta.json()
    
    return(canciones)
}