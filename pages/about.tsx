import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const About: NextPage = () => {
  return (
    <div className='relative h-abouth  '>
      <Head>
        <title>Waste Management</title>
        <meta name="description" content="waste management" />
        <link rel="icon" href="" />
      </Head>

       {/* <<<<<<<<<< hero begins >>>>>>>>>>>>>>>>>> */}
       <div className='absolute w-screen overflow-hidden  h-screen max-w-full'>
        <Image src='/truck.jpg' width= {1500} height={765}   alt='truck'  />

        <div className='absolute inset-0 bg-gradient-to-r from-lhero to-hero sm:h-72 md:h-herop max-w-full'>
            <div className='flex justify-between absolute mt-40'>
                <div className='ml-16'>
                    <Image src='/W2B 3.png' width={310} height={286} alt='logo' />
                </div>
                <span className='ml-80 font-poppins text-white'>
                    <h1 className='text-4xl font-semibold'>Get to know us</h1>
                    <p className='text-base mt-2 w-textw h-texth'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        At sit facilisis egestas lorem nibh facilisis orci adipiscing. 
                        Nunc aliquam neque fermentum pretium. Tristique nibh consectetur 
                        elementum cursus odio lacus. Nibh enim nullam egestas fames augue 
                        arcu enim.
                        Orci consequat, cras elementum sapien gravida pellentesque 
                        pharetra risus. Nunc, velit nibh laoreet nisi fermentum id in in.
                        Ipsum eget odio id in aliquam. Non duis dictumst auctor nullam 
                        porttitor in sed. Consectetur in malesuada nulla commodo. Egestas
                        viverra mattis non eget. Pretium sit nullam risus pulvinar. At 
                        maecenas massa.
                    </p>
                </span>
            </div>
        </div>

      </div>
    {/* <<<<<<<<<<<<<< hero ends >>>>>>>>>>>>>>>>> */}
          {/* <<<<<<<<<<<<<<<<<<< About Section >>>>>>>>>>>>> */}
      <div className='text-black grid place-items-center font-poppins'>
          <h1 className='text-4xl  font-semibold mt-abt'>About us</h1>
          <p className='text-sn mx-8 font-normal mt-8 w-abouthw'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus facilisis mattis ut convallis
               amet enim non malesuada. Aliquet ornare in auctor arcu, maecenas curabitur nec molestie iacu
               lis. Cras tristique velit neque pharetra tempus eget platea. Id luctus ultricies eleifend ut
                At purus sed dolor, risus a in tincidunt in hac. Ultrices vitae, a non, tellus feugiat inte
                rdum aliquet non porta. A morbi in hendrerit lectus. Nisi, odio nullam nibh odio morbi fauc
                ibus. Massa, pellentesque mauris nulla amet, odio etiam id enim. Cursus nisi, tempus mi dol
                or nec at nunc bibendum. Augue nullam euismod est tristique turpis risus eget. Quam morbi n
                unc purus congue nunc, nunc, habitant. Feugiat semper accumsan facilisis congue. Magna dign
                issim diam in blandit sed proin. Viverra in amet justo, commodo vitae quam feugiat  viverra
               purus. Lacus amet nisi arcu rhoncus. Praesent diam commodo donec lectus facilisi nam eu inter
               dum. Turpis praesent consectetur dolor semper libero tortor. Odio bibendum sit aliquam nulla urna elit, sed. Dis amet, eu pretium mattis a velit sed. Viverra amet, sit sodales a. Dictum aenean ut senectus risus. Lacinia duis aenean quam tortor nec id vulputate id.
              Purus tincidunt natoque nibh eros, in lacus. Sed cras id libero pharetra viverra. Semper aliq
               uam quam maecenas adipiscing pharetra. Quis tristique morbi sed quisque tempor cum pellentesq
              ue mauris cursus. Pellentesque elementum sit varius accumsan eu proin mollis eget. Duis.Lorem 
              ipsum dolor sit amet, consectetur adipiscing elit. Lectus facilisis mattis ut convallis amet 
              enim non malesuada. Aliquet ornare in auctor arcu, maecenas curabitur nec molestie iaculis. 
              Cras tristique velit neque pharetra tempus eget platea. Id luctus ultricies eleifend ut. At 
              purus sed dolor, risus a in tincidunt in hac. Ultrices vitae, a non, tellus feugiat interdum 
              aliquet non porta. A morbi in hendrerit lectus. Nisi, odio nullam nibh odio morbi faucibus. 
              Massa, pellentesque mauris nulla amet, odio etiam id enim. Cursus nisi, tempus mi dolor nec a
              t nunc bibendum. Augue nullam euismod est tristique turpis risus eget.
              Quam morbi nunc purus congue nunc, nunc, habitant. Feugiat semper accumsan facilisis congue. 
              Magna dignissim diam in blandit sed proin. Viverra in amet justo, commodo vitae quam feugiat 
              viverra purus. Lacus amet nisi arcu rhoncus. Praesent diam commodo donec lectus facilisi nam eu
               interdum. Turpis praesent consectetur dolor semper libero tortor. Odio bibendum sit aliquam n
               ulla urna elit, sed. Dis amet, eu pretium mattis a velit sed. Viverra amet, sit sodales a. Di
               ctum aenean ut senectus risus. Lacinia duis aenean quam tortor nec id vulputate id.
              Purus tincidunt natoque nibh eros, in lacus. Sed cras id libero pharetra viverra. Semper aliq
              uam quam maecenas adipiscing pharetra. Quis tristique morbi sed quisque tempor cum pellentesq
              ue mauris cursus. Pellentesque elementum sit varius accumsan eu proin mollis eget. Duis.Lorem 
              ipsum dolor sit amet, consectetur adipiscing elit. Lectus facilisis mattis ut convallis amet 
              enim non malesuada. Aliquet ornare in auctor arcu, maecenas curabitur nec molestie iaculis. 
              Cras tristique velit neque pharetra tempus eget platea. Id luctus ultricies eleifend ut. At 
              purus sed dolor, risus a in tincidunt in hac. Ultrices vitae, a non, tellus feugiat interdum 
              aliquet non porta. A morbi in hendrerit lectus. Nisi, odio nullam nibh odio morbi faucibus. 
              Massa, pellentesque mauris nulla amet, odio etiam id enim. Cursus nisi, tempus mi dolor nec 
              at nunc bibendum. Augue nullam euismod est tristique turpis risus eget.
              Quam morbi nunc purus congue nunc, nunc, habitant. Feugiat semper accumsan facilisis congue. 
              Magna dignissim diam in blandit sed proin. Viverra in amet justo, commodo vitae quam feugiat 
              viverra purus. Lacus amet nisi arcu rhoncus. Praesent diam commodo donec lectus facilisi nam e
              u interdum. Turpis praesent consectetur dolor semper libero tortor. Odio bibendum sit aliquam
               nulla urna elit, sed. Dis amet, eu pretium mattis a velit sed. Viverra amet, sit sodales a. 
               Dictum aenean ut senectus risus. Lacinia duis aenean quam tortor nec id vulputate id.
              Purus tincidunt natoque nibh eros, in lacus. Sed cras id libero pharetra viverra. Semper aliq

              uam quam maecenas adipiscing pharetra. Quis tristique morbi sed quisque tempor cum pellentesq
              ue mauris cursus. Pellentesque elementum sit varius accumsan eu proin mollis eget. Duis.Lorem
               ipsum dolor sit amet, consectetur adipiscing elit. Lectus facilisis mattis ut convallis amet
                enim non malesuada. Aliquet ornare in auctor arcu, maecenas curabitur nec molestie iaculis.
                 Cras tristique velit neque pharetra tempus eget platea. Id luctus ultricies eleifend ut. A
                 t purus sed dolor, risus a in tincidunt in hac. Ultrices vitae, a non, tellus feugiat interdum aliquet non porta. A morbi in hendrerit lectus. Nisi, odio nullam nibh odio morbi faucibus. Massa, pellentesque mauris nulla amet, odio etiam id enim. Cursus nisi, tempus mi dolor nec at nunc bibendum. Augue nullam euismod est tristique turpis risus eget.
              Quam morbi nunc purus congue nunc, nunc, habitant. Feugiat semper accumsan facilisis congue
              Magna dignissim diam in blandit sed proin. Viverra in amet justo, commodo vitae quam feugiat 
              viverra purus. Lacus amet nisi arcu rhoncus. Praesent diam commodo donec lectus facilisi nam 
              eu interdum. Turpis praesent consectetur dolor semper libero tortor. Odio bibendum sit aliqua
              m nulla urna elit, sed. Dis amet, eu pretium mattis a velit sed. Viverra amet, sit sodales a.
               Dictum aenean ut senectus risus. Lacinia duis aenean quam tortor nec id vulputate id.
              Purus tincidunt natoque nibh eros, in lacus. Sed cras id libero pharetra viverra. Semper aliq
              uam quam maecenas adipiscing pharetra. Quis tristique morbi sed quisque tempor cum pellentesq
              ue mauris cursus. Pellentesque elementum sit varius accumsan eu proin mollis eget. Duis.
          </p>
      </div>
    {/* <<<<<<<<<<<<<<<<<<< About Section Ends >>>>>>>>>>>>> */}

           {/* <<<<<<<<<<<<<<<<<<<<< Team Section >>>>>>>>>>>>>>>>>> */}
      <div className='bg-team max-w-full absolute w-aboutw h-teamh mt-16'>
          <h1 className='grid place-items-center font-poppins font-semibold text-3xl mt-12'>
              Meet Our Team
          </h1>
          <div className='flex justify-between items-center mt-8 mx-20 '>
              <div className='grid place-items-center font-poppins font-medium  text-lg'>
                  <Image src='/team1.png' alt='team' width={285} height={223} />
                  <h1 className='text-black '>Executive director</h1>
                  <p className='text-hero'>Jane Doe</p>
                </div>

                <div className='grid place-items-center font-poppins font-medium  text-lg'>
                  <Image src='/team2.png' alt='team' width={285} height={223} />
                  <h1 className='text-black '>HR head</h1>
                  <p className='text-hero'>Jane Doe</p>
                </div>

                <div className='grid place-items-center font-poppins font-medium  text-lg'>
                  <Image src='/team3.png' alt='team' width={285} height={223} />
                  <h1 className='text-black '>Miusic director</h1>
                  <p className='text-hero'>Jane Doe</p>
                </div>

            </div>

            <div className='flex justify-between items-center mt-8 mx-20 '>

                <div className='grid place-items-center font-poppins font-medium  text-lg'>
                  <Image src='/team4.png' alt='team' width={285} height={223} />
                  <h1 className='text-black '>Secretary</h1>
                  <p className='text-hero'>Jane Doe</p>
                </div>

                <div className='grid place-items-center font-poppins font-medium  text-lg'>
                  <Image src='/team5.png' alt='team' width={285} height={223} />
                  <h1 className='text-black '>Product designer</h1>
                  <p className='text-hero'>Jane Doe</p> 
                </div>

                <div className='grid place-items-center font-poppins font-medium  text-lg'>
                  <Image src='/team6.png' alt='team' width={285} height={223} />
                  <h1 className='text-black '>Software engineer</h1>
                  <p className='text-hero'>Jane Doe</p>
                </div>

            </div>

          </div>
    {/* <<<<<<<<<<<<<<<<<<<<< Team Section Ends >>>>>>>>>>>>>>>>>> */}
    
     
    </div>
  )
}

export default About