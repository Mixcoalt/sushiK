import {useState, useEffect} from 'react'
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import {formatearDinero} from "../helpers"


const ModalProducto = () => {

    const {producto, handleChangeModal, handleAgregarPedido, pedido } = 
        useQuiosco()
    const [cantidad, setCantidad] = useState(1) 

    const [edicion, setEdicion] = useState(false)


    useEffect(() =>{
         //comprobar si el modal actual esta en el pedido

        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const productoEdicion = pedido.find(
                (pedidoState) => pedidoState.id === producto.id
            )
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)

        }

    }, [producto, pedido])


   

    return (
        <div className="div1">
            <div className="div">
                <Image 
                
                    width={300}
                    height={400}
                    alt={`imagen producto ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                />
            </div>

            <div className="div2">

                <div className="boton_x">
                    <button 
                        onClick={handleChangeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-x-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" fill="currentColor" stroke-width="0" />
                        </svg>
                    </button>
                </div>

                <h1 className="texto">
                    {producto.nombre}
                </h1>

                <p className="producto">
                    {formatearDinero(producto.precio)}
                </p>

                <div className="plus">
                    <button
                    
                        type='button'
                        onClick={() =>{
                            if(cantidad <= 1) return
                            setCantidad(cantidad - 1)
                        }}
                    
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-minus-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-4 9h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993z" stroke-width="0" fill="currentColor" />
                        </svg>
                    </button>
                        <p className='cantidad'>
                            {cantidad}
                        </p>
                    <button 
                    
                        type='button'
                        onClick={() =>{
                            if (cantidad >= 6) return
                            setCantidad(cantidad + 1)
                        }}
                    
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 5l0 14" />
                        <path d="M5 12l14 0" />
                        </svg>
                    </button>
                </div>


                    <button
                        type='button'
                        className='boton-agregar'
                        onClick={() => handleAgregarPedido({...producto,
                        cantidad})}
                    >
                        {edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
                    </button>

            </div>
        </div>
    );
};

export default ModalProducto;