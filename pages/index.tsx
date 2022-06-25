import Head from 'next/head'
import { useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { definitions } from '../models/supabase'

export default function Home() {
  useEffect(() => {
    const getAuth = async () => {

      const data = await supabase
      .from<definitions['programs']>('programs')
      .select('*')
      console.log("PROGRAMS: " + JSON.stringify(data.data))
    }
    getAuth()
  }, [])

  return (
    <div>
      <Head>
        <title>myGNV Resource Finder</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Resource Finder</h1>
      </main>
    </div>
  )
}
