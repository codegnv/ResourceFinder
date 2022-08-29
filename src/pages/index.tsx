/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from 'next/head'
import { Hero } from '../components/LandingPage/Hero'
import { Footer } from '../components/Footer'
import { SmHrLine } from '../components/shared/HrLine'
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
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Hero />
      <Footer />
    </>
  )
}

export default Home
