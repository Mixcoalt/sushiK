import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Modal from 'react-modal'
import {ToastContainer} from 'react-toastify'
import ModalProducto from '../components/ModalProducto'
import useQuiosco from '../hooks/useQuiosco'
import Pasos from '../components/Pasos'
import 'react-toastify/dist/ReactToastify.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#__next');


export default function Layout({children, pagina}) {

    const {modal} = useQuiosco()

    return (
        <>
        
        <Head>
            <title>Sushi - {pagina}</title>
            <meta name='description' content='Sushi Kumo' />
        </Head>

        <div className='md:flex contenido mx-auto'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
               <Sidebar />
            </aside>

            <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen
            overflow-y-scroll'>
                <div className='p-10'>
                <Pasos/>
                {children}
                </div>
                
            </main>
        </div>
        
        {modal && (
            <Modal
                isOpen={modal}
                style={customStyles}
            >
                <ModalProducto />
            </Modal>
        )}

        <ToastContainer/>

        </>
    )
  }

