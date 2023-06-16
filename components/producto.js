import Image from "next/image"
import Link from 'next/link'
import styles from '../styles/productos.module.css'

export default function Producto({ producto }) {
  const { descripcion, imagen, nombre, precio, url, disponible } = producto
  console.log(producto)
  return (
    <div className={styles.producto}>
      <div className={styles.contenido}>
        <Image className={styles.imagen} src={imagen.data.attributes.url} width={300} height={100} alt={`Imagen producto ${nombre}`} />

        
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <p className={styles.descripcion}>{disponible}</p>
       
        
        <Link href={`/productos/${url}`} className={styles.enlace}>
          Ver Producto
        </Link>
      </div>

    
    </div>
    
  )
}

