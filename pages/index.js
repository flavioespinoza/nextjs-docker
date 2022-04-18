import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> on Docker deployed on Google Cloud Run!
        </h1>

        <h1>
          This is the skeleton app for testing the <a href="https://akash.network/blog">Akash Network Blog</a>
        </h1>

      </main>

      <footer className={styles.footer}>
        Copyright 2022 Akash Network
      </footer>
    </div>
  )
}
