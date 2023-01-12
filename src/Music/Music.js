import {serviciosCancionesTop} from '../services/servicioCanciones.js'
import {useState, useEffect} from'react'
import './Music.css'

export function Music(){

    //usando el hook useState para almacenar la respuesta del api de forma global
    const [canciones,setCancioes]=useState(null)
    const [estadoCarga, setEstadoCarga]=useState(true)

    //usando el hook useeffet para limpiar el consumo del api a una sola vez
    useEffect(function(){
        serviciosCancionesTop().then(function(respuesta){
            setCancioes(respuesta)
            setEstadoCarga(false)
        })
    },[])

    //render del componente:
    if(estadoCarga == true){

        return(
            <>
                <h2>estamos cargando las canciones</h2>
            </>
        )

    }else{

        return(
            <>
                <h2 className='text-center p-3'>canciones de la banda:</h2>
                <div className="container bannermusic">
                    <div className="row row-cols-1 row-cols-md-3 m-2">
                {
                    canciones.tracks.map(function(cancion){
                        return(
                            <div className="col pb-5 text-center h-100  ">
                                 <div className="card shadow  h-100 p-5 ">
                                    <img src={cancion.album.images[0].url} alt="" className="h-100 img-fluid w-100 "/>
                                    <h1>{cancion.name}</h1>
                                    <audio controls src={cancion.preview_url}></audio>
                                </div>
                            </div>
                           
                           
                        )
                    })
                }
                     </div>
                </div>
            </>
        )

    }


}