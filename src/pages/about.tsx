/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { About } from '../components/AboutPage/About'

function AboutPage() {
  return (
    <>
      <Head>
        <title>myGNV Resource Finder</title>
        <meta name='description' content='myGNV Resource Finder' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <About />
      <Footer />
    </>
  )
}

export default AboutPage
