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
        const data = await supabase.rpc('service_list')
        return { data }
      },
    }),
    getAllTags: builder.query({
      queryFn: async () => {
        const data = await supabase.from('tags').select('id, name')
        return { data }
      },
    }),
    getAllPrograms: builder.query({
      queryFn: async () => {
        const data = await supabase.rpc('program_list')
        return { data }
      },
    }),
  }),
})

export const {
  useGetAllDepartmentsQuery,
  useGetAllProgramsQuery,
  useGetAllServicesQuery,
  useGetAllTagsQuery,
} = api
