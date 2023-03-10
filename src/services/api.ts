import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostgrestResponse } from '@supabase/supabase-js'
import { IDepartment, IProgram, IService, ITag } from 'src/components/Results/types'
import { supabase } from '../utils/supabaseClient'

// All api calls should be here
export const api = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'resourceFinderApi',
  endpoints: builder => ({
    getAllDepartments: builder.query({
      queryFn: async () => {
        const data: PostgrestResponse<IDepartment> = await supabase.from('departments')
        return { data }
      },
    }),
    getAllServices: builder.query({
      queryFn: async () => {
        const data: PostgrestResponse<IService> = await supabase.rpc('service_list')
        return { data }
      },
    }),
    getAllTags: builder.query({
      queryFn: async () => {
        const data: PostgrestResponse<ITag> = await supabase.from('tags')
        return { data }
      },
    }),
    getAllPrograms: builder.query({
      queryFn: async () => {
        const data: PostgrestResponse<IProgram> = await supabase.rpc('program_list')
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
