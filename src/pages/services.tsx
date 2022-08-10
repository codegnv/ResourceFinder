/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from 'next/head'
import Tabs from 'src/components/Tabs'
import Results from '../components/Results'
import { useGetAllTagsQuery, useGetAllServicesQuery } from '../services/api'

function Services() {
  const tempTestGrabberForTags = useGetAllTagsQuery(undefined)
  const tempTestGrabberForServices = useGetAllServicesQuery(undefined)

  return (
    <div>
      <Head>
        <title>myGNV Resource Finder</title>
        <meta name='description' content='myGNV Resource Finder' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Tabs />

      <main>
        <Results />
      </main>
    </div>
  )
}

export default Services
