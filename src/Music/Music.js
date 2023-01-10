import { serviciosCancionesTop } from "../services/servicioCanciones"

export function Music(){

    serviciosCancionesTop()

    return(
        <>
            <h1>MUSIC CARGANDO...</h1>
        </>
        
    )
}