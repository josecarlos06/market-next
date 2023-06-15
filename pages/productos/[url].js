import { useRouter } from "next/router"
export default function Producto() {
  return (
    <div>
      [url]
    </div>
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