import { Footer } from "../shared/Footer/Footer"
import { useNavigate } from "react-router-dom"

export function Mercancia(){

    //Activamos la navegacion entre componentes cuadno se de un evento

    let navegacion=useNavigate()

    //que hago cuando se de el evento...
    function detectarEventos(productoSelecionado){
        navegacion('/tienda',{
            state:{productoSelecionado}
        })
        
    }

    let titulo="PRODUCTOS DE LA BANDA"

    let productos=[
        {
            nombre:"Gel para el cabello",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/producto-1.jpg?alt=media&token=3346fbbe-93ec-4f36-901e-0b20cd5143f8",
            precio:20000,
            Descripcion:"Fórmula libre de Alcohol No es Pegajoso Fórmula desarrollada para proporcionar a su cabello una fijación ultra fuerte obteniendo un máximo control del peinado durante todo el día Realza el color de tus cabellos oscuros con la nueva fórmula vive una experiencia de peinado y fijación."
        },
        {
            nombre:"Botas de cuero",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/producto-2.webp?alt=media&token=25c1088f-0684-4a31-adfc-0817b8bfab19",
            precio:70000,
            Descripcion:"Botas 100% cuero Calzado de Montaña para Hombre Disponibles en Tallas 37 al 42."
        },
        {
            nombre:"Libretas",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/producto-3.jpg?alt=media&token=ec36f754-c8f1-42ef-85a4-26c1b0693580",
            precio:15000,
            Descripcion:"Libreta con tapas en poliuretano y banda elástica para cerrar. Solo el color natural tiene cubierta en cartón y hojas de rayas.Medidas: 14 cm x 9 cm."
        },
        {
            nombre:"Riñonera en cuero-plateada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/producto-4.webp?alt=media&token=533dee2c-ead6-43de-9352-e4606936a783",
            precio:45000,
            Descripcion:"Practico canguro en modelo clásico Características: 7 bolsillos Broche resistente Material en Cuero 100% genuino Correa ajustable (57 a 93 cm sin contar medidas del canguro Medidas del canguro: Largo: 43 cm, Ancho: 20 cm"
        },
        {
            nombre:"Hoddy original color negro",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/producto-5.jpeg?alt=media&token=f787601f-3ce7-494c-882f-73e98c8eb1ff",
            precio:80000,
            Descripcion:"Cada artículo tiene su propia tabla de tallas debido a los diferentes estilos, a veces es mucho más pequeño o más grande de lo habitual. Comprueba la lista de tallas de los artículos que quieres comprar antes de realizar el pedido."
        },
        {
            nombre:"CD original de Reik",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/producto-6.jpg?alt=media&token=d51e2603-395c-4e1f-96f9-3005a2896c86",
            precio:120000,
            Descripcion:"Hitmusical es una empresa con más de 30 años de experiencia vendiendo música en Colombia y en el mundo."
        }
    ]

    return(
        <>
            <h1 className="text-center p-5">{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                   {
                    productos.map(function(producto,id){
                        return(
                            <div key={id}>
                                 <div className="col pb-5 h-100 p-2">
                                 <div className="card shadow text-center h-100 p-2">
                                    <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100 " />
                                    <h1>{producto.nombre}</h1>
                                    <h3>COP: {producto.precio}<i className="bi bi-currency-dollar me-4"></i>        
                                    <i className="bi bi-gift"></i></h3>
                                    <button className="btn btn-primary mx-3 my-3" onClick={
                                        function(){
                                            detectarEventos(producto)
                                        }
                                    }>Ampliar</button>
                                 </div>
                                 </div> 
                            </div>
                        )
                    })
                   }

                </div>
            </div>
            <Footer/>
        </>
    )
}