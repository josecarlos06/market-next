
import styles from '../styles/carrusel.module.css'

export default function Carrusel ({carrusel}){

    const { descripcion, imagen, titulo } = carrusel

    console.log(carrusel)
    
    return (

        <div >
        <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>
        <section className={`${styles.carrusel} carrusel `}>
           <swiper-container>
           <swiper-slide>
               <h3>{titulo} titulo1</h3>
               <p >{descripcion}</p>
               <style jsx>{`
           .carrusel {
               background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url})
           }
           `}</style>

           </swiper-slide>


           <swiper-slide>  <h3>{titulo} titulo2</h3>
               Comprar en Amazon

               <style jsx>{`
           .carrusel {
               background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url})
           }
           `}</style>
          </swiper-slide>
           <swiper-slide>
               <h3>{titulo} titulo3</h3>
               <style jsx>{`
           .carrusel {
               background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url})
           }
           `}</style>
           </swiper-slide>
       </swiper-container>
        </section>
     
    </div>
    )
}
