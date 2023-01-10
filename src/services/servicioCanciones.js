//receta para consumir un appi con react

export async function serviciosCancionesTop(){


    //1. pa onde vas Y a que vas 
    //Escribir a url del servicio del API
    const URL="https://api.spotify.com/v1/artists/0vR2qb8m9WHeZ5ByCbimq2/top-tracks?market=US"

    //2. que operacion vas hacer en la base de datos
    //configurar la peticion de envio hacia el servidor
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQAYKnEpm_hWGmuTdrFw4Yzm0kJjzoKrHb8lsvlNFYe0tjAJ8n9NgnXxzyW0ttJ3dE-gGuxlvB9c9jRhPsgWsakqg1L0yr-mXf56Ayg0ZcZIq7E4Pnwo5erT-IKrtcEVezl-RNDW1hhtiLGjQBeRdK0puVAa5i4_G7ZB9cNUK51cs4PgeplnY-husMYZezU_1f0"}
}
    //3. NOS VAMOS AL RESTAURANTE
    //CONSUMIMOS EL API

    let respuesta=await fetch(URL, PETICION)
    let canciones=await respuesta.json()
    
    console.log(canciones)
}