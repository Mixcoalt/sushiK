import Image from "next/image";
import {formatearDinero} from '../helpers'
import useQuiosco from "../hooks/useQuiosco";



const Producto = ({producto}) => {
    const {hanldeProducto, handleChangeModal} = useQuiosco()

    const {nombre, imagen, precio} = producto
    const extension = imagen.endsWith(".png") ? "png" : imagen.endsWith(".jpeg") ? "jpeg" : "jpg";

    return (
        <div className="br border p-3">
            <Image  
                src={`/assets/img/${imagen}.${extension}`} 
                alt={`Imagen Platillo ${nombre}`} 
                width={400}
                height={500}
            />

            <div className="card p-5">
                <h3 className="font-bold text-3xl ">{nombre}</h3>
                <p className="parrafo mt-5 text-amber-400">
                    {formatearDinero(precio)}
                </p>

                <button type="button"
                    className=" btn"
                    onClick={() => {
                        handleChangeModal()
                        hanldeProducto(producto)
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};

export default Producto;