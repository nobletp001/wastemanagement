import React from 'react'
import styles from '../../styles/Header.module.scss'

export const Header = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
    
      <div className={styles.headercontainer}>
 <div className={styles.logo}>logo</div>
        <div className={open ? `${styles.headerItemContainer} ${styles.expand}` : `${styles.headerItemContainer}`}>
          <div className={styles.headerItem1}>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Testimonials</li>
              <li>Manage waste</li>
             
            </ul>
         </div>
          <div className={styles.headerItem2}>
           <ul>
              <li>Sign In</li>
              <li>Register</li>
              <li>Photo</li>
           </ul>
         </div>
        </div>
        <div className={open ? `${styles.navicon1} ${styles.open}` : `${styles.navicon1}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
     
    </>
  )
}
