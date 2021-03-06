import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import Footer from '../components/Footer/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps,  }: AppProps) {

  return <>
    <Header />
    <div className='indexStyle'>
      <Component {...pageProps} />

    </div>
   <Footer/>
  </>
}

export default MyApp
