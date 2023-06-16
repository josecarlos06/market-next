import React from "react";

import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          {/* <Link href="/">Inicio</Link>

          <Link href="/nosotros">Nosotros</Link>

          <Link href="/tienda">Tienda</Link> */}
           <section class="contenedor">
                <div class={styles.textoheader}>
                    <a class={styles.telefono} href="tel:+525513506809">5513506809</a>
                    <a class={styles.correo} href="mailto:contacto@disinet.com">contacto@disinet.com</a>

                    <p class={styles.ubicacion}>Mexico City</p>
                </div>
            </section>
        </nav>
        <p className={styles.copy}>
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>  
    </footer>
  );
}
