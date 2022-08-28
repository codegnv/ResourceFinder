import { NoResultsState } from '../shared/Status'
import { PaginatedResults } from './PaginatedResults'
import { IDepartment, IService, ITag } from './types'

export interface IResultsProps {
  services: Array<IService>
  filters: {
    categories: Array<string>
    departments: Array<string>
    search: string
  }
}

export function Results({ services, filters }: IResultsProps) {
  const filteredByTagData =
    filters.categories.length > 0 && services
      ? services.filter((item: { tags: Array<ITag> }) =>
          item.tags.some((tag: ITag) => filters.categories.includes(tag.name))
        )
      : services

  const filteredByDepartmentData =
    filters.departments.length > 0 && filteredByTagData
      ? filteredByTagData.filter((item: { departments: Array<IDepartment> }) =>
          item.departments.some((department: IDepartment) => filters.departments.includes(department.name))
        )
      : filteredByTagData

  const filteredBySearchData =
    filters.search.length > 0 && filteredByDepartmentData
      ? filteredByDepartmentData.filter(job => job.name.toLowerCase().includes(filters.search.toLowerCase()))
      : filteredByDepartmentData

  if (!filteredBySearchData || filteredBySearchData?.length === 0) return <NoResultsState />

  return <PaginatedResults data={filteredBySearchData} />
}
