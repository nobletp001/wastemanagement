import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import Footer from '../components/Footer/Footer'
import About from '../views/About/about'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <div className='indexStyle'>
      <Component {...pageProps} />

    </div>
    <About/>
   <Footer/>
  </>
}

export default MyApp
