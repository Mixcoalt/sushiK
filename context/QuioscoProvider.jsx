import {useState, useEffect, createContext} from 'react'

import axios from 'axios'

import {toast} from 'react-toastify'

import { useRouter } from 'next/router'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const[modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

    const obtenerCategorias = async () =>{
        const { data } = await axios('/api/categorias')
        setCategorias(data.categorias)
    }

    useEffect(() =>{
        obtenerCategorias()
    }, [])

    useEffect(() =>{
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id =>{
        const categoria = categorias.filter(c => c.id === id)
        setCategoriaActual(categoria[0])

        router.push('/')
    }

    useEffect (() =>{
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * 
            producto.cantidad) + total, 0)

        setTotal(nuevoTotal)
    }, [pedido])

    const hanldeProducto = producto => {
        setProducto(producto)
    }


    const handleChangeModal = () =>{
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId,  ...producto}) =>{

        if(pedido.some(productoState => productoState.id === producto.id)){
            //Actualizar la cantidad

            const pedidoActualizado = pedido.map(productoState => 
                productoState.id === producto.id ? producto : productoState)

            setPedido(pedidoActualizado)

            toast.success('Guardado Correctamente')

        }else{
            setPedido([...pedido, producto])

            toast.success('Agregado al Pedido')
        }

        setModal(false)

       
    }

    const handleEditarCantidad = (id) =>{
        const productoActualizar = pedido.filter(producto =>
            producto.id === id)

        setProducto(productoActualizar[0])

        setModal(!modal)
    }

    const handleEliminarProducto = (id) =>{
        const pedidoActualizado = pedido.filter(producto =>
            producto.id !== id)

        setPedido(pedidoActualizado)
    }

    const colocarOrden = async (e) =>{
        e.preventDefault()

        try {
           await axios.post('/api/ordenes', {
            pedido,
            nombre,
            direccion,
            telefono,
            total,
            fecha: Date.now().toString()
           })
           
           //Resetar la app
           setCategoriaActual(categorias[0])
           setPedido([])
           setNombre('')
           setDireccion('')
           setTelefono('')
           setTotal(0)

           toast.success('Pedido Realizado Correctamente')

           setTimeout(() => {
                router.push('/')
           }, 3000);

        } catch (error) {
            console.log(error)
        }

       console.log(pedido)
       console.log(nombre)
       console.log(direccion)
       console.log(total)
    }
    



    return(
        <QuioscoContext.Provider
        
            value = {{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                hanldeProducto,
                modal,
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidad,
                handleEliminarProducto,
                nombre,
                setNombre,
                direccion,
                setDireccion,
                telefono,
                setTelefono,
                colocarOrden,
                total
              
            }}
        
        >

        {children}

        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext