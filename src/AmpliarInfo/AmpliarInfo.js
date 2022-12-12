 import { useLocation } from "react-router-dom"

 export function AmpliarInfo(){

    let datosrecibidos=useLocation()

    let producto=datosrecibidos.state.productoSelecionado
    console.log(producto)

    return(
        <>
            <h1 className="text-start p-5">{producto.nombre}</h1>
        </>
    )

 }