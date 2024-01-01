import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({categoria}) => {
    const {categoriaActual, handleClickCategoria} = useQuiosco()
    const {nombre, icono, id} = categoria

    return (
        <div className={`${categoriaActual?.id === id ? "amarillo" : ""} 
        central`}>
            <Image 
            
                width={70}
                height={70}
                src={`assets/img/icono_${icono}.svg`}
                alt="Imagen Icono"

            
            />

            <button
                type="button"
                className=" boton"
                onClick={() => handleClickCategoria(id)}
            >
                {nombre}
            </button>
        </div>
    );
};

export default Categoria;