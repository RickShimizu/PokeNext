import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout ({children}) {
    return(
    <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon" />
            <title>PokeNext</title>           
        </Head>

        <Navbar />
            <main className="main_container">{children}</main>
        <Footer />
    
    </>
    )
}