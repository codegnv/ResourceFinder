import Head from 'next/head'
import { Results } from '../components/Results'
import { Tabs } from '../components/Tabs'
import { useGetAllServicesQuery } from '../services/api'

function Services() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tempTestGrabberForServices = useGetAllServicesQuery(undefined)
  return (
    <>
      <Head>
        <title>Services | myGNV Resource Finder</title>
        <meta name='description' content='myGNV Resource Finder List of services' />
      </Head>
      <Tabs />

      <main>
        <Results services={tempTestGrabberForServices} />
      </main>
    </>
  )
}

export default Services
