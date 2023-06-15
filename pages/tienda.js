
import Layout from '../components/layout'
import styles from '../styles/grid.module.css'
import Producto from '../components/producto'

export default function Tienda({productos}) {

    return (

        
        <Layout
            title={'Nosotros'}
            description='Tienda Ecommerce con importaciones y todos los productos que necesitas'
        >
            <main className='contenedor'>
                <h1 className='heading'>
                    Nuestros Productos
                </h1>

                <div className={styles.grid}>
                    {productos?.map(producto => (
                        <Producto
                            key={producto.id}
                            producto={producto.attributes}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/productos?populate=imagen`)
    const { data: productos } = await respuesta.json()
    return {
        props: {
            productos
        }
    }
}


// export async function getStaticProps() {
//     const respuesta = await fetch(`${process.env.API_URL}/`)
//     const {data: productos} = await respuesta.json()
//     return{
//         props:{
//             productos
//         }
//     }
// }