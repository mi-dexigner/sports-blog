import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";
import Hero from './Hero';

function Layout({title,description,children}) {
    const router = useRouter();
    return (
        <div>
            <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Header />
      {router.pathname === "/" && <Hero />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
    )
}
Layout.defaultProps = {
    title:"Sports News | Find Sports News",
    description:"A Website that brings you latest news about sports"
}
export default Layout
