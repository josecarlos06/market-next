import Layout from "../components/layout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout
    title="Página No Encontrada">

        <p className="error">Página no encontrada</p>
        <img className="error404" src="../img/404.png" width={200} height={200}></img>
        <Link href='/' className="error-enlace">
            Ir a Inicio
          
        </Link>
    </Layout>

  )
}
