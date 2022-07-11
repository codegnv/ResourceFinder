import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from '../utils/supabaseClient'

// All api calls should be here
export const api = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'resourceFinderApi',
  endpoints: builder => ({
    getAllDepartments: builder.query({
      queryFn: async () => {
        const data = await supabase.from('departments').select('id, name')
        return { data }
      },
    }),
    getAllServices: builder.query({
      queryFn: async () => {
        const data = await supabase.from('services')
        return { data }
      },
    }),
    getAllTags: builder.query({
      queryFn: async () => {
        const data = await supabase.from('tags').select('id, name')
        return { data }
      },
    }),
  }),
})

export const { useGetAllDepartmentsQuery, useGetAllServicesQuery, useGetAllTagsQuery } = api
