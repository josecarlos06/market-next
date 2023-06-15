import Layout from '../components/layout'
import Producto from '../components/producto'
import Anuncio from '../components/anuncio'
import Carrusel from '../components/carrusel'
import styles from '../styles/grid.module.css'
import Swiper from 'swiper'
import SwiperComponent from '../components/swiper'


export const getStaticProps = async () => {

  const [resProductos, resAnuncio, resCarrusel] = await Promise.all([
    fetch('http://127.0.0.1:1337/api/productos?populate=imagen'),
    fetch('http://127.0.0.1:1337/api/anuncio?populate=imagen'),
    fetch('http://127.0.0.1:1337/api/carrusels?populate=imagen')
  ]);
  
  const [{ data: productos }, { data: anuncio }, { data: carrusel }] = await Promise.all([
    resProductos.json(),
    resAnuncio.json(),
    resCarrusel.json()
  ]);

  return {
    props: {
      productos,
      anuncio,
      carrusel
    }
  }
 }

export default function Home({productos, anuncio, carrusel}) {
  return (
    <>

      <Layout
        title={'Inicio'}
        description={'Tienda Ecommerce productos importados marketconnect'}
      >
         
         <SwiperComponent carrusels={carrusel}/>
        <main className='contenedor'>
          <h1 className='heading'>Nuestros Productos</h1>
          <div className={styles.grid}>
            {productos?.map(producto => (
              <Producto
                key={producto.id}

                producto={producto.attributes}
              />
            ))}
          </div>

          <Anuncio
            anuncio={anuncio}
          />
        </main>

      </Layout>
    </>
  )
}
