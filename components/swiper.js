import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import styles from '../styles/carrusel.module.css'

const SwiperComponent = ({carrusels}) => {
   return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
         <section className={`${styles.carrusel}`}>
            {carrusels.map(carrusel=>(
               <SwiperSlide key={carrusel.attributes.id}>
               <Image
                  src={carrusel.attributes.imagen?.data?.attributes?.url}
                  width={500}
                  height={500}
                  alt={carrusel.attributes.titulo}
                  className={`${styles.carrulseImg}`}
               />
               <h3 className={`${styles.headingCarrusel}`}>{carrusel.attributes.titulo}</h3>
               </SwiperSlide>
            ))}
         </section>
        ...
      </Swiper>
    );
}

export default SwiperComponent