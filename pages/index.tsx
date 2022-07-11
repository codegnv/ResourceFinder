import Head from 'next/head'
import { useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { definitions } from '../models/supabase'

export default function Home() {
  useEffect(() => {
    const getAuth = async () => {

     // departments
     // tags = categories
     // programs
      // 1a) Get a list of amenities
      var { data, error } = await supabase.rpc('amenity_list')

      // 1b) Loop through amenities, get their locations
      if (!error && data) {
        data.forEach(function (amenity) {
          console.log(amenity.name)
          amenity.locations.forEach(function (location: definitions['locations']) {
            console.log("\t" + location.name)
          })
        })
      }

      // 2a) Get a list of services
      var { data, error } = await supabase.rpc('service_list')

      // 1b) Loop through services, get their programs and tags
      if (!error && data) {
        data.forEach(function (service) {
          console.log(service.name)
          console.log("\tprograms:")
          service.programs.forEach(function (program: definitions['programs']) {
            console.log("\t\t" + program.name)
          })
          console.log("\ttags:")
          service.tags.forEach(function (tag: definitions['tags']) {
            console.log("\t\t" + tag.name)
          })
        })
      }

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
