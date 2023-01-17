 import './AmpliarInfo.css'
 import { useLocation } from "react-router-dom"

 export function AmpliarInfo(){

    let datosrecibidos=useLocation()
    let producto=datosrecibidos.state.productoSelecionado
    console.log(producto)

    return(
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-5">
                        <img src={producto.foto} alt="foto" className="img-fluid h-100" />
                    </div>  
                    <div className="col-12 col-md-4 border p-3">
                        <h2 className="fw-bold">{producto.nombre}</h2>
                        <h1 className="mt-3 display-1">$ {producto.precio} <span className='descuento'> 24% off</span></h1>
                        <br/>
                        <span class="badge text-bg-primary fs-6"> descuento del dia </span>
                        <p>Hata 48 cuotas</p>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/american-express%20(2).png?alt=media&token=dc0a4788-620b-481e-8b10-0a633373fa75'  className='img-fluid'/> 
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/visa%20(1).png?alt=media&token=ab3aa79b-1ff0-4ee5-b9df-959409dcd398' className='img-fluid ms-2'/>
                        <br/>
                        <br/>
                        <i class="bi bi-truck mt-5 fs-1 text-success"> <span className='fs-6 fw-bold'>  Envio gratis a nivel Nacional</span></i>
                        <p>Conoce los tiempos y las formas de envio</p>
                    </div>
                </div>
            </div>
        </>
    )

 }