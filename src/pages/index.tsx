/* eslint-disable @typescript-eslint/no-unused-vars */
import { Hero } from 'src/components/LandingPage/Hero'
import Head from 'next/head'
import { useGetAllTagsQuery, useGetAllServicesQuery, useGetAllDepartmentsQuery } from '../services/api'

function Home() {
  // TODO: Some kind of prefetch
  const tempTestGrabberForTags = useGetAllTagsQuery(undefined)
  const tempTestGrabberForServices = useGetAllServicesQuery(undefined)
  const tempTestGrabberForDepartments = useGetAllDepartmentsQuery(undefined)

  return (
    <>
      <Head>
        <title>myGNV Resource Finder</title>
        <meta name='description' content='myGNV Resource Finder' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Hero />
    </>
  )
}

export default Home
