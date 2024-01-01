import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "../components/ResumenProducto";

export default function Resumen(){
    const {pedido} = useQuiosco()
    return (
        <Layout pagina='Resumen'>
            <h1 className="titulo-resumen">Resumen</h1>
            <p className="parrafo-resumen">Revisa tu Pedido</p>

            {pedido.length === 0 ? (
                <p className="resumen-pedido">No hay elementos en tu pedido</p>
            ) : (
                pedido.map(producto =>(
                    <ResumenProducto 
                        key={producto.id}
                        producto={producto}
                    />
                ))
            )}
        </Layout>
    )
}