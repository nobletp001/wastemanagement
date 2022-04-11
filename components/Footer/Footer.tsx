import React from 'react'
import styles from '../../styles/Footer.module.scss'

export default function Footer() {
  return (
   <div className={styles.footer}>
          <div className={styles.footerContainer}>

              <div className={styles.footerItem1}>
                  <div className={styles.footercontent1}>
                      <div className={styles.footercontentItem}>Join Our Newsletter</div>
                      <div className={styles.footercontentItem4}>Get the latest news and update from  us</div>
                  </div>
                  <div className={styles.footercontent2}>
                      <div className={styles.footercontentItem1}> <input type="text" name="" id="" placeholder='enter address' /></div>
                      <div className={styles.footercontentItem3}><button>SIGN UP</button></div>
                  </div>
              </div>
              <div className={styles.footerBottom}>


                  <div className={styles.footerBottomItem1}>
                      <div>photo</div>
                      <div className={styles.footerBottom_use}>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion.</div>
                  </div>
                  <div className={styles.footerBottomItem2}>
                      <div className={styles.footerBottom_working}> Working Hours</div>
                      <ul>
                          <li>Mon - Fri: 09:00AM - 09:00PM</li>
                          <li>Sat: 09:00AM - 07:00PM</li>
                          <li>Sun: Closed</li>

                      </ul>
                  </div>
                  <div className={styles.footerBottomItem3}>
                      <div className={styles.footerBottom_follow}>Follow Us </div>
                      <div></div>

                  </div>
              </div>
          </div>
   </div>
  )
}
