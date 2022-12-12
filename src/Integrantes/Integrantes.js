import { Footer } from "../shared/Footer/Footer"
import './Integrantes.css'

export function Integrantes(){
    

    let integrantes=[
        {
            nombre:"Jesús Navarro",
            post:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/integrante.jpg?alt=media&token=87077235-c960-438d-a298-6bf4b29c4d43",
            sipnosis:"Jesús Alberto Navarro Rosas nació un 9 de julio en Mexicali, Baja California. Desde los seis años de edad comenzó a cantar en coros y misas; le gusta tocar el piano y asegura tener influencia musical de diversos artistas, entre ellos John Mayer, Justin Timberlake y Robbie Williams. Es la voz principal de Reik, agrupación surgida en 2005 con una propuesta romántica y moderna. En mayo del mismo año lanzaron su primer álbum Reik, en el que predominan los géneros pop y balada, y por el que obtuvieron discos de oro y platino por altas ventas. ras el éxito alcanzado, llegaron los álbumes Secuencia (2006); Sesión metropolitana (2006), Un día más (2008); Peligro (2011); Reik, en vivo desde el Auditorio Nacional (2013); Des/Amor (2016), y Ahora (2019). Algunos de sus temas son Momentos, en coautoría con Ángela Dávalos y Julio Ramírez; Piel de ciudad, escrito en colaboración con Mónica Vélez y Fernando Chávez; Ahora sin ti, No te quiero olvidar, escrito en colaboración con Joshua Rubín, Julio Ramírez y Bibi Marín; Ilusionado, coautoría con Horacio López, Julio Ramírez y Juan Carlos Pérez, y Mi pecado, colaboración con Ángela Dávalos, Julio Ramírez y Bibi Marín, interpretada por Maite Perroni y tema de la telenovela del mismo nombre."
        },
        {
            nombre:"Julio Ramírez Eguía",
            post:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/integrante-2.jpg?alt=media&token=8ea9215d-a55c-49dc-8e3b-600d0ea041c1",
            sipnosis:"Julio Ramírez Eguía nació un 21 de diciembre en Mexicali, Baja California. Descubrió su interés por la música a los doce años de edad y pidió que le compraran una guitarra; dos años más tarde formó su primera agrupación Within, con la que comenzó a darse a conocer. A los quince años compuso su primera canción Ahora sin ti con sus amigos Dense Silva, Marco Polo Moraga y Jesús Navarro con quien, junto con Gerardo Barreto, formó un grupo musical que pronto se posicionó en el gusto del público, logrando presentarse en programas de televisión local. Cuando cursaba la preparatoria en el Tecnológico de Monterrey fue seleccionado como uno de los diez finalistas de un concurso de talentos, lo que le permitió presentarse en el Hard Rock Live. Durante unas vacaciones compuso, con su primo Roberto Valdez, el tema Cómo me duele, que posteriormente formaría parte del repertorio del primer disco de Reik. Estando en Guadalajara recibió una llamada de Jesús Navarro comunicándole que la disquera Sony estaba interesada en la música del grupo y en suscribir un contrato; regresó a Mexicali e integraron formalmente el proyecto Reik."
        },
        {
            nombre:"Bibi Marín",
            post:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/bibi%20marin%20kiko.webp?alt=media&token=b6a2d941-5396-4048-977d-6db53150ec66",
            sipnosis:"Gilberto Marín, mejor conocido como Bibi Marín, es un actor y músico, nacido en Méxicali, Baja California. Es mundialmente reconocido por ser el guitarrista del grupo de pop Reik desde el 2004, un año después de que la agrupación fuera formada por Jesús Navarro y Julio Ramírez. Bibí aseguró que comenzó a tocar la guitarra desde los 11 años, no obstante, la música y los instrumentos habían estado siempre presentes en su familia. Bibi toca la guitarra eléctrica en la banda Reik, fue el último integrante en formar parte de la banda después de un año de la formación de ella en 2004. La banda fue conformada por Gilberto “Bibi” Marín, Jesús Alberto Navarro Rosas como vocalista, y Julio Ramírez Eguía como guitarrista y ha sido conformada por los mismos miembros hasta la fecha actual. Después de formar parte en la banda Reik, ellos empezaron a hacer música con productores locales que fueron bien recibidos y aprobación por la audiencia de su ciudad debido a las reseñas que los locales le daban en las redes sociales. La banda originaria de Mexicali lanza su primer disco en 2005, incluyendo la canción “Yo quisiera”. En su unión en 2004 la banda se estableció bajo el concepto de trío pop. Su grupo firmó un contrato con SONY BMG, recientemente después de su fundación en 2004."
        }
    ]
    let titulo="INTEGRANTES"

 return(
    <>
    <section>
        <div class="colorfondo">   
            <div class="bannerintegrantes">
            </div>
        </div>
    </section>
        <div class="container">
                <h1 class="text-center p-5"> <i class="bi bi-star-fill"> </i> { titulo} <i class="bi bi-star-fill"></i></h1> <hr/>
                <div class="row row-cols-1 row-cols-md-1 m-5">
                   {
                    integrantes.map(function(integrante){
                        return(
                            <>   
                            <div class="card mb-3 m-5">
                                <div class="row fotofonfo">
                                    <div class="col-md-4 ">
                                        <img src={integrante.post} class="rounded-start h-100 img-fluid w-100" alt="foto"/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="text-center">{integrante.nombre}</h5>
                                            <p class="text-start m-4 ">{integrante.sipnosis}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                   }

                </div>
            </div>
            <Footer/>
    </>
    
 )
}