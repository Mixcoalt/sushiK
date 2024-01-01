import Image from "next/image";
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco";

const ResumenProducto = ({producto}) => {
    const { handleEditarCantidad, handleEliminarProducto  } = useQuiosco()

    return (
        <div className="prodcuto">
            <div className="md:w-1/6">
                <Image 
                    width={300}
                    height={400}
                    alt={`Imagen Producto ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                
                />
            </div>

            <div className="md:w-4/6">
                <p className="producto-nombre">
                    {producto.nombre}
                </p>

                <p className="producto-cantidad">
                    Cantidad: {producto.cantidad}
                </p>

                <p className="producto-precio ">
                    Precio: {formatearDinero(producto.precio)}
                </p>

                <p className="producto-subtotal text-sm text-gray-700">
                    Subtotal: {formatearDinero(producto.precio * 
                                                producto.cantidad)}
                </p>
            </div>

            <div>
                <button
                    type="button"
                    className="producto-boton"

                    onClick={() => handleEditarCantidad(producto.id)}
                >
   
                    Editar
                </button>

                <button
                    type="button"
                    className="producto-boton-red"
                    onClick={() => handleEliminarProducto(producto.id)}
                >
                    Eliminar
                </button>
            </div>

        </div>
    );
};

export default ResumenProducto;