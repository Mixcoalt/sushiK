import Image from "next/image"
import axios from "axios"
import { toast } from 'react-toastify'
import  { formatearDinero } from '../helpers'

export default function Orden({orden}){
    const {id, nombre, direccion, telefono ,total, pedido} = orden

    const completarOrden = async () =>{
        try {
          await axios.post(`/api/ordenes/${id}`)
          toast.success('Orden Lista')
        } catch (error) {
            toast.error('Hubo un Error :(')
        }
    }

    return(
        <div className="border p-10 space-y-5">
            <h3 className="text-2xl font-bold">Orden: {id}</h3>
            <p className="text-lg font-bold">Cliente: {nombre} </p>
            <p className="text-lg font-bold">Dirección: {direccion} </p>
            <p className="text-lg font-bold"> Telefono: {telefono} </p>

            <div>
                { pedido.map(platillo =>(
                    <div 
                        key={platillo.id}
                        className="py-3 flex border-b last-of-type:border-0 items-center"
                    >

                        <div className="w-32">
                            <Image
                                width={400}
                                height={500}
                                src={`/assets/img/${platillo.imagen}.jpg`}
                                alt={`Imagen Platillo ${platillo.nombre}`}
                            />    
                        </div>

                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">
                                {platillo.nombre}
                            </h4>

                            <p className="text-lg font-bold">
                                Cantidad: {platillo.cantidad}
                            </p>
                        </div>
                    </div>
                )) }
            </div>

            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">
                    Total a Pagar: {formatearDinero(total)}
                </p>

                <button
                    className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0
                    py-3 px-10 uppercase font-bold rounded-lg"
                    onClick={completarOrden}
                >
                    Completar Orden
                </button>

            </div>

        </div>
    )
}