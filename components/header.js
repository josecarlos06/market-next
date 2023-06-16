import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'


export default function Header() {
    const router = useRouter()
    console.log(router)
    return (

        <header className={styles.header}>
 


            <div className={`contenedor ${styles.barra}`}>
                <Link href={'/'}>
                    <h1 className={styles.logo}>MARKET CONNECT
                   </h1>
                </Link>

                {/* <Image src="/img/logo.svg" width={300} height={40} alt="imagen logotipo" /> */}


                <nav className={styles.navegacion}>

                    <div class={styles.textoheader}>
                        <a class={styles.whats} href="https://wa.me/5513506809?text=¡Estoy+interesado en comprar!" target="_blank"></a>

                        <a class={styles.insta} href="https://www.instagram.com/" target="_blank"></a>

                        <a class={styles.tiktok} href="https://www.tiktok.com/" target="_blank"></a>
                    </div>
                    {/* <Link href="/" className={router.pathname === '/' ? styles.active : ' '}>
                        Inicio
                    </Link> */}

                    {/* <Link href="/nosotros" className={router.pathname === '/nosotros' ? styles.active : ' '}>
                        Nosotros
                    </Link>
                    <Link href="/tienda" className={router.pathname === '/tienda' ? styles.active : ' '}>
                        Tienda
                    </Link> */}

                    
                </nav>

               
            </div>

           
        </header>

    )
}
