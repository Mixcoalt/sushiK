import { useEffect, useCallback } from 'react'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from '../helpers'

export default function Total(){

    const { pedido, nombre, setNombre, direccion, setDireccion, 
        telefono, setTelefono, colocarOrden, total } = useQuiosco()

    const comprobarPedido = useCallback(() =>{
        return pedido.length === 0 || nombre === '' || direccion === '' || nombre <= 5 || telefono === 'cl'

    }, [pedido, nombre,direccion, telefono])

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido])

   

    return (
    <Layout pagina='Total y Confirmar Pedido'>
        <h1 className="titulo-resumen">Total y Confirmar Pedido</h1>
        <p className="parrafo-resumen">
            Confirma tu Pedido a Continuacion 
        </p>

        <form
            onSubmit={colocarOrden}
        >
            <div>
                <label 
                htmlFor="nombre"
                className="formulario  text-slate-800">
                    Nombre y numero de telfono
                </label>

                <input 
                id="nombre"
                className="formulario-campo p-2 rounded-sm"
                onChange={e => setNombre(e.target.value)}
                type="text"
                placeholder='Juan perez, 012345678' />
            </div>

            <div>
                <label 
                htmlFor="direccion"
                className="formulario">
                    Direción
                </label>

                <input 
                id="direccion"
                className="formulario-campo"
                onChange={e => setDireccion(e.target.value)}
                type="text"
                placeholder='calle #00' />
            </div>

            <div>
                <label 
                htmlFor="telefono"
                className="formulario">
                    Telefono
                </label>

                <input 
                id="telefono"
                className="formulario-campo"
                onChange={e => setTelefono(e.target.value)}
                type="text"
                placeholder='213121231' />
            </div>

            <div className="formulario-total mt-10">
                <p className="text-2xl">Total a pagar: {''} 
                    <span className="span">
                        {formatearDinero(total)}
                    </span> 
                </p>
            </div>

            <div className="btn-a">
                <input
                type="submit"
                className={`${comprobarPedido() ? "blanco" : "azul"} formulario-boton`}
                disabled={comprobarPedido()}
                value="Confirmar Pedido" />
            </div>

        </form>
    </Layout>
    )
}