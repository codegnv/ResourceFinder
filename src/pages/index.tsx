import Head from 'next/head'
import { Hero } from '../components/LandingPage/Hero'
import { Footer } from '../components/Footer'

function Home() {
  return (
    <>
      <Head>
        <title>myGNV Resource Finder</title>
        <meta name='description' content='myGNV Resource Finder' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Hero />
      <Footer />
    </>
  )
}

export default Home
