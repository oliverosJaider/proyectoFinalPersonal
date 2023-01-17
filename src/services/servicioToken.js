export async function generarToken(){

    const client_id="client_id=5501419731b24627bfa9535458d3f3b6"
    const client_secret="client_secret=5ba0a12eaa264ad7859d5f966109ff12"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id
    const URL="https://accounts.spotify.com/api/token"
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)
    let token=await respuesta.json()
    let tokenDefinitivo=token.token_type+" "+token.access_token
    return(tokenDefinitivo)
}