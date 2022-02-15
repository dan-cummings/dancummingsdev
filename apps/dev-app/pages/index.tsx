import type { NextPage } from 'next'
import Head from 'next/head'
import Terminal from '../components/Terminal'
import Welcome from '../components/Welcome'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage for dancummings.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Terminal>
        <Welcome></Welcome>
      </Terminal>
      </div>
  )
}

export default Home
