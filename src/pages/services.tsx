import Head from 'next/head'
import { Tabs } from 'src/components/Tabs'
import { Results } from '../components/Results'

function Services() {
  return (
    <>
      <Head>
        <title>myGNV Resource Finder</title>
        <meta name='description' content='myGNV Resource Finder' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Tabs />

      <main>
        <Results />
      </main>
    </>
  )
}

export default Services
