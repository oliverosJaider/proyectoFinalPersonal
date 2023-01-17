import './Footer.css'

export function Footer(){

    return(
        <>
        <footer>
            <div className="container-fluid">
                <div className="row footer">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/reikkk.png?alt=media&token=9b79fbfe-6853-46ea-bcd7-935b497a0c1b" alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 text-center p-5 align-self-center">
                        <h2 className="fw-bold">SOBRE LA BANDA</h2>
                        <h4 className="">Reik (2003) un grupo de jóvenes mexicanos conformaron esta agrupación musical pop. </h4>
                        <br/>
                    </div>
                    <div className="col-12 col-md-4 p-5 align-self-center">
                    <i className="bi bi-instagram fuente me-3 "  ></i>
                    <i className="bi bi-twitter fuente me-3"></i>
                    <i className="bi bi-facebook fuente"></i>
                    </div>
                </div>
            </div>
        </footer> 
        </>
    )

}