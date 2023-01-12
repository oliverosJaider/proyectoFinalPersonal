import { Footer } from '../shared/Footer/Footer'
import './Home.css'
export function Home(){

    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                        <h2>Reik</h2>
                            <p>Reik es una banda musical originaria de Mexicali, Baja California, México y formada en 2003. Esta banda está principalmente conformada por Jesús Navarro (Voz principal y Piano), Julio Ramírez (Guitarra y Bajo) y Gilberto «Bibi» Marín (Guitarra y Batería). Los primeros 5 álbumes de la banda mexicana han sido de puras Baladas románticas, sin embargo, desde principios de 2015 sus últimas producciones abarcan el reguetón y el pop latino. Ha ganado un Latin Billboard Music Award, cuatro premios Los Premios MTV Latinoamérica y un Grammy latino.</p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/HSIQPPQMOZAMBO5ORVNZL5ACPY.jpg?alt=media&token=62c6e61e-723b-4fde-9154-9efb65bb1f9a" className="img-fluid w-100"></img>
                        </div>

                        <div className="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Med</h3>
                                    <h5>Dec 2</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Cali</h3>
                                    <h5>Dec 3</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Bog</h3>
                                    <h5>Dec 4</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Barr</h3>
                                    <h5>Dec 5</h5>
                                </div>
                            </div>  

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>NOTICIAS</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/Reik-Maluma.jpg?alt=media&token=b6b717bf-68e3-4d69-bffe-bbf1e5262a64" alt="" className="img-fluid w-100"/>
                           <p className="m-4">
                            Reik y Maluma, cantautor de origen colombiano, lanzaron recientemente su nuevo sencillo titulado Perfecta. En la colaboración se mezclaron ritmos urbanos y latinos, como es el caso del reggaetón, con la balada pop, género musical con el que el trío originario de Mexicali incursionó en la industria musical y con el que destacó por más de una década a través de melodías como Noviembre sin Ti o Yo quisiera, estrenadas en el 2007.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/posibilidad-reik-invitados-sorpresas-celeste.jpeg?alt=media&token=dd81d616-c1c0-41be-8e42-a9d4cfc76c51" alt="" className="img-fluid w-100"/>
                           <p className="m-4">
                            Esta mañana, la empresa Escenario Live Entretairment anunció en sus redes sociales, que la presentación de Reik en Pachuca de Soto —programada para el 8 de septiembre del presente año —, fue cancelada; el motivo no fue expuesto y se informó que el reembolso de los boletos sería a través del mismo medio en que fue adquirido, por lo que no debería existir algún problema para que los espectadores recuperen su dinero.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/reik-en-pachuca.jpeg?alt=media&token=4ce97f51-536d-4595-91ba-a229e22248b0" alt="" className="img-fluid w-100"/>
                            <p className="m-4">
                            PACHUCA.- Previo a la realización de la Feria San Francisco Pachuca 2022 que destaca por traer a grandes artistas, Reik abrirá el apetito musical de los espectadores capitalinos.

                            Pues fue anunciado que realizará una presentación como parte de En Cambio Tour y la cita será el 8 de septiembre en el auditorio de la plaza Explanada Pachuca.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}
