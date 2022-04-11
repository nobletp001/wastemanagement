import { selectUnstyledClasses } from '@mui/base';
import React from 'react';
import styles from '../../styles/Login.module.scss'

export default function  Index() {
  return (
    <>
   <div className={styles.loginContainer}>
       <div className={styles.loginBg}>
             <div className={styles.loginGradient}></div>
       </div>
       
       <div className={styles.loginBox}>
          <div className={styles.SignIn}>
            sign in
</div>
<div className={styles.logininput}>
            <div className={styles.logininputText}>Email</div>
  <input type="text" name="" id="" placeholder='example2gmail.com'/>
</div>

          <div className={styles.logininput}>
            <div className={styles.logininputText}>Password</div>
            <input type="text" name="" id="" />
          </div>
          <button>Sign In</button>
          <div className={styles.account}>Don’t have an account? <span> Sign up</span></div>
       </div>
   </div>
    </>
  );
}
