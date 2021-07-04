import Image from 'next/image'

import styles from './styles.module.css';

export default function SignUp() {
  return <div className={styles.root}>

    <div className={styles.loginRoot}>
      <div>
        <div className={styles.logo}></div>
        <div className={styles.title}>Japan Hikes</div>
        <div className={styles.subtitle}>From easy day trips to multi day treks,<br /> discover Japan's vibrant hiking culture
        </div>
        <div className={styles.inputContainer}>
          <div>Email</div>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <div>Password</div>
          <input type="password" />
        </div>
        <div className={styles.inputContainer}>
          <div>Confirm Password</div>
          <input type="password" />
        </div>
        <div className={styles.btnContainer}>
          <a className={styles.btn} href="">
            <span>Create my Account</span>
          </a>
        </div>
        <div className={styles.linksContainer}>
          <a href="">I already have an account</a>
          <a href="">I forgot my password</a>
        </div>
      </div>
    </div>
  </div>
}
