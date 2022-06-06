import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import '../pages/_app'

const Contact: NextPage = () => {
  return (
    <div className='relative h-contacth'>
      <Head>
        <title>Waste Management</title>
        <meta name="description" content="waste management" />
        <link rel="icon" href="" />
      </Head>

    {/* <<<<<<<<<<<<<<<<< Hero starts >>>>>>>>>>>>>>>>>>>> */}
      <div className='absolute w-screen overflow-hidden h-screen max-w-full'> 
        <Image src='/truck.jpg' width= {1500} height={765}   alt='truck'  />

        <div className='absolute inset-0 bg-gradient-to-r from-lhero to-hero sm:h-72 md:h-herop max-w-full'>
          <div className='font-poppins text-white not-italic pt-52 ml-24'>
           <h1 className='text-5xl font-semibold mb-6'>Get in Touch</h1>
            <p className='text-xl w-1/2 '>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit facilisis egestas lorem nibh
              facilisis orci adipiscing. 
            </p>
          </div>
        </div>

      </div>
    {/* <<<<<<<<<<<<<<<<<<<<<< Hero Ends >>>>>>>>>>>>>>>>>>>>>>> */}

    {/* <<<<<<<<<<<<<<<<<<<<<<<< contact container >>>>>>>>>>>>>>>>>>>>>>> */}
      <div className=' absolute bg-white box-border shadow-formshade w-10/12 h-boxh mx-28 mt-lg'>

        <div className='text-hero'>
          <h1 className='text-center pt-12 font-bold font-poppins text-2xl'>Get In Touch</h1>
          <div className='mt-6 bg-hero h-1 mx-auto rounded-xl w-64' />
        </div>

        <span className='font-poppins'>
          <h1 className='pt-14 ml-16 text-black font-medium text-lg'>Leave us a message</h1>
        </span> 

    {/* <<<<<<<<<<<<<<<<<<< FormBox Starts >>>>>>>>>>>>>>>>>>>>> */}
      <div className='flex justify-between'>

       <div className='mt-12 ml-16'>

          <div className='flex justify-start '>
           <label className='relative'>
             <input type='text' className='h-14 w-formw focus:border-brd  border-2 
              border-brd border-opacity-50 rounded-sm outline-none focus:text-black
              transition duration-200 px-6' placeholder='First_Name Last_Name' />
              <span className='absolute left-0 top-4 mx-6 px-2
              transition duration-200 input-text'>Name</span>
            </label>
          </div>
          <div className='flex justify-start '>
           <label className='relative mt-8 '>
             <input type='email' className='h-14 w-formw focus:border-brd  border-2 
              border-brd border-opacity-50 rounded-sm outline-none focus:text-black
              transition duration-200 px-6' placeholder='Email Address' />
              <span className='absolute left-0 top-4 mx-6 px-2
              transition duration-200 input-text'>aEmail Address</span>
            </label>
          </div>

          <div className='flex justify-start mt-8'>
            <textarea className='h-40 w-formw border-2 border-brd rounded-sm
            focus:outline-none px-6 py-4' placeholder='Your Message'></textarea>
          </div>

          <button className='inline-block justify-start bg-hero w-formw 
          h-14 text-white rounded-sm px-6 py-4 mt-8'>Send</button>
        </div>
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<< FormBox Ends >>>>>>>>>>>>>>>>>>>>>>>> */}

{/* <<<<<<< box2 containwer >>>>>>>>>>>>>>>>>> */}
        <div>
          <div className='mr-16 mt-8'>
            <span className='font-poppins font-normal text-black text-base '>
              Infomation technologies building, <br/>Victoria Island, Lagos, Nigeria.
            </span>
          </div>

          <div className='mr-16 mt-8'>
            <span className='font-poppins font-normal text-black text-base '>
              +234 081-1236-4568
            </span>
          </div>

          <div className='mr-16 mt-8'>
            <span className='font-poppins font-normal text-black text-base '>
              hello@info.com.ng
            </span>
          </div>

        </div>
        {/* <<<<<<<<<<<< End of box2 container >>>>>>>>>>>>>>>>>>> */}

        </div> 

      </div>
    {/* <<<<<<<<<<<<<<<<<<<<< Contact Container Ends >>>>>>>>>>>>>>>>>>> */}
    </div>
  )
}

export default Contact 
