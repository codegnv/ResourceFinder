import React from 'react'
import {
  useGetAllDepartmentsQuery,
  useGetAllProgramsQuery,
  useGetAllServicesQuery,
  useGetAllTagsQuery,
} from '../../services/api'
import { Title } from './Title'

export function Header() {
  const [, setAllDataPreFetched] = React.useState(false)
  const prefectchForDepartments = useGetAllDepartmentsQuery(1)
  const prefectchForPrograms = useGetAllProgramsQuery(1)
  const prefectchForServices = useGetAllServicesQuery(1)
  const prefectchForTags = useGetAllTagsQuery(1)

  React.useEffect(() => {
    if (prefectchForDepartments && prefectchForPrograms && prefectchForServices && prefectchForTags) {
      setAllDataPreFetched(true)
    }
  }, [prefectchForDepartments, prefectchForPrograms, prefectchForServices, prefectchForTags])

  return (
    <>
      <Title />
    </>
  )
}
