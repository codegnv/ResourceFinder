/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from 'next/head'
import { Hero } from '../components/LandingPage/Hero'
import { useGetAllDepartmentsQuery, useGetAllTagsQuery } from '../services/api'

function Home() {
  // TODO: Some kind of prefetch
  const tempTestGrabberForTags = useGetAllTagsQuery(undefined)
  const tempTestGrabberForDepartments = useGetAllDepartmentsQuery(undefined)

  return (
    <>
      <Head>
        <title>myGNV Resource Finder</title>
        <meta name='description' content='myGNV Resource Finder' />
      </Head>
      <Hero />
    </>
  )
}

export default Home
