/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from 'next/head'
import Results from '../components/Results'
import { useGetAllTagsQuery, useGetAllServicesQuery } from '../services/api'

export default function Home() {
  const tempTestGrabberForTags = useGetAllTagsQuery(undefined)
  const tempTestGrabberForServices = useGetAllServicesQuery(undefined)

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
