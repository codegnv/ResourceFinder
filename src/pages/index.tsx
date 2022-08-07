import Head from 'next/head'
import Results from '../components/Results'

export default function Home() {
  return (
    <div>
      <Head>
        <title>myGNV Resource Finder</title>
        <meta name='description' content='myGNV Resource Finder' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main>
        <Results />
      </main>
    </div>
  )
}
