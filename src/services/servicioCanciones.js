//receta para consumir un appi con react
import { generarToken } from "./servicioToken"
export async function serviciosCancionesTop(){

    let token=await generarToken()


    //1. pa onde vas Y a que vas 
    //Escribir a url del servicio del API
    const URL="https://api.spotify.com/v1/artists/0vR2qb8m9WHeZ5ByCbimq2/top-tracks?market=US"

    //2. que operacion vas hacer en la base de datos
    //configurar la peticion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:token}
}
    //3. NOS VAMOS AL RESTAURANTE
    //CONSUMIMOS EL API

    let respuesta=await fetch(URL, PETICION)
    let canciones=await respuesta.json()
    
    return(canciones)
}