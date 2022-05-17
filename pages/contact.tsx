import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/contact.module.css'
import tw from 'tailwind-styled-components'

const Hero = tw.div`
  md:max-w-full
  lg:max-w-full
   
`

const Contact: NextPage = () => {
  return (
    <div className='relative h-abouth  bg-white'>
      <Head>
        <title>Waste Management</title>
        <meta name="description" content="waste management" />
        <link rel="icon" href="" />
      </Head>

    <Hero className={styles.hero} >

    </Hero>
     
    </div>
  )
}

export default Contact