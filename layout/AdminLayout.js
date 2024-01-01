import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Sushi Kumo - {pagina}</title>
        <meta name="description" content="Quosco Cafetería" />
      </Head>

      <div className="layout-principal">
            <aside className="layout-aside">
                <Image
                    width={300}
                    height={100}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />
            </aside>

            <main className="layout-main">
                <div className="p-10 layout-div">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}
