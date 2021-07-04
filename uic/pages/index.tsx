import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/main.module.css'
import clsx from 'clsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.title}>UIChallenge</div>
        <div className={clsx(styles.menuItem, styles.selected)}>
          <aside>1</aside><main>Sign Up</main>
        </div>
        <div className={styles.menuItem}>
          <aside>2</aside><main>Checkout</main>
        </div>
        <div className={styles.menuItem}>
          <aside>3</aside><main>Landing Page</main>
        </div>
        <div className={styles.menuItem}>
          <aside>4</aside><main>Calculator</main>
        </div>
      </div>
    </div>
  )
}
