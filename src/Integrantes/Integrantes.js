

export function Integrantes(){
    let titulo="Integrantes"

    let integrantes=[
        {
            nombre:"Jesús Navarro",
            post:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/integrante.jpg?alt=media&token=87077235-c960-438d-a298-6bf4b29c4d43",
            sipnosis:"Jesús Alberto Navarro Rosas nació un 9 de julio en Mexicali, Baja California. Desde los seis años de edad comenzó a cantar en coros y misas; le gusta tocar el piano y asegura tener influencia musical de diversos artistas, entre ellos John Mayer, Justin Timberlake y Robbie Williams. Es la voz principal de Reik, agrupación surgida en 2005 con una propuesta romántica y moderna. En mayo del mismo año lanzaron su primer álbum Reik, en el que predominan los géneros pop y balada, y por el que obtuvieron discos de oro y platino por altas ventas."
        },
        {
            nombre:"Julio Ramírez Eguía",
            post:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/integrante-2.jpg?alt=media&token=8ea9215d-a55c-49dc-8e3b-600d0ea041c1",
            sipnosis:"Julio Ramírez Eguía nació un 21 de diciembre en Mexicali, Baja California. Descubrió su interés por la música a los doce años de edad y pidió que le compraran una guitarra; dos años más tarde formó su primera agrupación Within, con la que comenzó a darse a conocer. A los quince años compuso su primera canción Ahora sin ti con sus amigos Dense Silva, Marco Polo Moraga y Jesús Navarro con quien, junto con Gerardo Barreto, formó un grupo musical que pronto se posicionó en el gusto del público, logrando presentarse en programas de televisión local."
        },
        {
            nombre:"Bibi Marín",
            post:"https://firebasestorage.googleapis.com/v0/b/spotyjaider.appspot.com/o/integrante-1.jpg?alt=media&token=9778718a-3d3e-4d6e-b043-e838062f98c4",
            sipnosis:"Gilberto Marín, mejor conocido como Bibi Marín, es un actor y músico, nacido en Méxicali, Baja California. Es mundialmente reconocido por ser el guitarrista del grupo de pop Reik desde el 2004, un año después de que la agrupación fuera formada por Jesús Navarro y Julio Ramírez. Bibí aseguró que comenzó a tocar la guitarra desde los 11 años, no obstante, la música y los instrumentos habían estado siempre presentes en su familia"
        }
    ]

 return(
    <>
        <h1 class="text-center p-4">{titulo}</h1>
            <div class="container">
            <div class="row row-cols- row-cols-md-3 g-5">
                   {
                    integrantes.map(function(integrante){
                        return(
                            <>   
                                <div class="col cold-6">
                                
                                </div>   
                            </>
                        )
                    })
                   }

                </div>
            </div>
    </>
    
 )
}