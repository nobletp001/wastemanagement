import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/about.module.css'
import tw from 'tailwind-styled-components'
import '../public/images/truck.jpg'

const Text = tw.div`
   text-white
   
`
const Text2 = tw.div`
   text-white
   
`

const About: NextPage = () => {
  return (
    <div className='relative h-abouth  bg-white '>
      <Head>
        <title>Waste Management</title>
        <meta name="description" content="waste management" />
        <link rel="icon" href="" />
      </Head>

        <div className={styles.hero}>
          <div className={styles.logo}></div>
          <Text>
            <h1 className={styles.heroText}>Get to know us</h1>
            <p className={styles.heropart}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              At sit facilisis egestas lorem nibh facilisis orci adipiscing. 
              Nunc aliquam neque fermentum pretium. Tristique nibh consectetur 
              elementum cursus odio lacus. Nibh enim nullam egestas fames augue 
              arcu enim.
              Orci consequat, cras elementum sapien gravida pellentesque 
              pharetra risus. Nunc, velit nibh laoreet nisi fermentum id in in.
              Ipsum eget odio id in aliquam. Non duis dictumst auctor nullam 
              porttitor in sed. Consectetur in malesuada nulla commodo. Egestas
               viverra mattis non eget. Pretium sit nullam risus pulvinar. At 
               maecenas massa.</p>
          </Text>

          <Text2>
            <h1 className={styles.abt}>About us</h1>
            <p className={styles.abp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus facilisis
              mattis ut convallis amet enim non malesuada. Aliquet ornare in auctor 
              arcu, maecenas curabitur nec molestie iaculis. Cras tristique velit neque
              pharetra tempus eget platea. Id luctus ultricies eleifend ut. At purus
              sed dolor, risus a in tincidunt in hac. Ultrices vitae, a non, tellus 
              feugiat interdum aliquet non porta. A morbi in hendrerit lectus. Nisi, 
              odio nullam nibh odio morbi faucibus. Massa, pellentesque mauris nulla 
              amet, odio etiam id enim. Cursus nisi, tempus mi dolor nec at nunc 
              bibendum. Augue nullam euismod est tristique turpis risus eget. Quam 
              morbi nunc purus congue nunc, nunc, habitant. Feugiat semper accumsan 
              facilisis congue. Magna dignissim diam in blandit sed proin. Viverra in 
              amet justo, commodo vitae quam feugiat viverra purus. Lacus amet nisi 
              arcu rhoncus. Praesent diam commodo donec lectus facilisi nam eu 
              interdum. Turpis praesent consectetur dolor semper libero tortor. Odio 
              bibendum sit aliquam nulla urna elit, sed. Dis amet, eu pretium mattis 
              a velit sed. Viverra amet, sit sodales a. Dictum aenean ut senectus 
              risus. Lacinia duis aenean quam tortor nec id vulputate id. Purus 
              tincidunt natoque nibh eros, in lacus. Sed cras id libero pharetra 
              viverra. Semper aliquam quam maecenas adipiscing pharetra. Quis tristique
              morbi sed quisque tempor cum pellentesque mauris cursus. Pellentesque 
              elementum sit varius accumsan eu proin mollis eget. Duis.Lorem ipsum 
              dolor sit amet, consectetur adipiscing elit. Lectus facilisis mattis ut 
              convallis amet enim non malesuada. Aliquet ornare in auctor arcu, 
              maecenas curabitur nec molestie iaculis. Cras tristique velit neque 
              pharetra tempus eget platea. Id luctus ultricies eleifend ut. At purus 
              sed dolor, risus a in tincidunt in hac. Ultrices vitae, a non, tellus 
              feugiat interdum aliquet non porta. A morbi in hendrerit lectus. Nisi, 
              odio nullam nibh odio morbi faucibus. Massa, pellentesque mauris nulla 
              amet, odio etiam id enim. Cursus nisi, tempus mi dolor nec at nunc 
              bibendum. Augue nullam euismod est tristique turpis risus eget. Quam 
              morbi nunc purus congue nunc, nunc, habitant. Feugiat semper accumsan 
              facilisis congue. Magna dignissim diam in blandit sed proin. Viverra in 
              amet justo, commodo vitae quam feugiat viverra purus. Lacus amet nisi 
              arcu rhoncus. Praesent diam commodo donec lectus facilisi nam eu 
              interdum. Turpis praesent consectetur dolor semper libero tortor. Odio 
              bibendum sit aliquam nulla urna elit, sed. Dis amet, eu pretium mattis 
              a velit sed. Viverra amet, sit sodales a. Dictum aenean ut senectus 
              risus. Lacinia duis aenean quam tortor nec id vulputate id. Purus 
              tincidunt natoque nibh eros, in lacus. Sed cras id libero pharetra 
              viverra. Semper aliquam quam maecenas adipiscing pharetra. Quis tristique
              morbi sed quisque tempor cum pellentesque mauris cursus. Pellentesque 
              elementum sit varius accumsan eu proin mollis eget. Duis.Lorem ipsum 
              dolor sit amet, consectetur adipiscing elit. Lectus facilisis mattis ut 
              convallis amet enim non malesuada. Aliquet ornare in auctor arcu, 
              maecenas curabitur nec molestie iaculis. Cras tristique velit neque 
              pharetra tempus eget platea. Id luctus ultricies eleifend ut. At purus 
              sed dolor, risus a in tincidunt in hac. Ultrices vitae, a non, tellus 
              feugiat interdum aliquet non porta. A morbi in hendrerit lectus. Nisi, 
              odio nullam nibh odio morbi faucibus. Massa, pellentesque mauris nulla 
              amet, odio etiam id enim. Cursus nisi, tempus mi dolor nec at nunc 
              bibendum. Augue nullam euismod est tristique turpis risus eget. Quam 
              morbi nunc purus congue nunc, nunc, habitant. Feugiat semper accumsan 
              facilisis congue. Magna dignissim diam in blandit sed proin. Viverra in 
              amet justo, commodo vitae quam feugiat viverra purus. Lacus amet nisi 
              arcu rhoncus. Praesent diam commodo donec lectus facilisi nam eu 
              interdum. Turpis praesent consectetur dolor semper libero tortor. Odio 
              bibendum sit aliquam nulla urna elit, sed. Dis amet, eu pretium mattis a 
              velit sed. Viverra amet, sit sodales a. Dictum aenean ut senectus risus. 
              Lacinia duis aenean quam tortor nec id vulputate id. Purus tincidunt 
              natoque nibh eros, in lacus. Sed cras id libero pharetra viverra. Semper 
              aliquam quam maecenas adipiscing pharetra. Quis tristique morbi sed 
              quisque tempor cum pellentesque mauris cursus. Pellentesque elementum 
              sit varius accumsan eu proin mollis eget. Duis.Lorem ipsum dolor sit 
              amet, consectetur adipiscing elit. Lectus facilisis mattis ut convallis 
              amet enim non malesuada. Aliquet ornare in auctor arcu, maecenas 
              curabitur nec molestie iaculis. Cras tristique velit neque pharetra 
              tempus eget platea. Id luctus ultricies eleifend ut. At purus sed dolor, 
              risus a in tincidunt in hac. Ultrices vitae, a non, tellus feugiat 
              interdum aliquet non porta. A morbi in hendrerit lectus. Nisi, odio 
              nullam nibh odio morbi faucibus. Massa, pellentesque mauris nulla amet, 
              odio etiam id enim. Cursus nisi, tempus mi dolor nec at nunc bibendum. 
              Augue nullam euismod est tristique turpis risus eget. Quam morbi nunc purus 
              congue nunc, nunc, habitant. Feugiat semper accumsan facilisis congue. Magna 
              dignissim diam in blandit sed proin. Viverra in amet justo, commodo vitae 
              quam feugiat viverra purus. Lacus amet nisi arcu rhoncus. Praesent diam commodo 
              donec lectus facilisi nam eu interdum. Turpis praesent consectetur dolor semper 
              libero tortor. Odio bibendum sit aliquam nulla urna elit, sed. Dis amet, eu 
              pretium mattis a velit sed. Viverra amet, sit sodales a. Dictum aenean ut senectus 
              risus. Lacinia duis aenean quam tortor nec id vulputate id. Purus tincidunt natoque 
              nibh eros, in lacus. Sed cras id libero pharetra viverra. Semper aliquam quam maecenas 
              adipiscing pharetra. Quis tristique morbi sed quisque tempor cum pellentesque mauris 
              cursus. Pellentesque elementum sit varius accumsan eu proin mollis eget. Duis. 
            </p>
          </Text2>

          <div className={styles.bord3}>
            <h1 className={styles.parg3}>Meet Our Team</h1>
            <div className={styles.team1}>
              <h1 className={styles.htag1}>Executive director</h1>
              <p className={styles.ptag1}>Jane Doe</p>
            </div>
            <div className={styles.team2}>
              <h1 className={styles.htag1}>Executive director</h1>
              <p className={styles.ptag1}>Jane Doe</p>
            </div>
            <div className={styles.team3}>
              <h1 className={styles.htag1}>Executive director</h1>
              <p className={styles.ptag1}>Jane Doe</p>
            </div>
            <div className={styles.team4}>
              <h1 className={styles.htag1}>Executive director</h1>
              <p className={styles.ptag1}>Jane Doe</p>
            </div>
            <div className={styles.team5}>
              <h1 className={styles.htag1}>Executive director</h1>
              <p className={styles.ptag1}>Jane Doe</p>
            </div>
            <div className={styles.team6}>
              <h1 className={styles.htag1}>Executive director</h1>
              <p className={styles.ptag1}>Jane Doe</p>
            </div>
          </div>

        </div>
    
     
    </div>
  )
}

export default About