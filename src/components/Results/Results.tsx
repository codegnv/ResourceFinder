/* eslint-disable @typescript-eslint/no-explicit-any */
import { partition } from 'src/utils/arrays'
import { NoResultsState } from '../shared/Status'
import { PaginatedResults } from './PaginatedResults'
import { IDepartment, IService, ITag } from './types'

export interface IResultsProps {
  services: Array<IService>
  filters: {
    categories: Array<string>
    costParticipation: Array<string | number>
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

  let filteredByCostParticipationData = filteredByDepartmentData

  if (filters.costParticipation.length > 0 && filteredByDepartmentData) {
    let internalRunner = filteredByDepartmentData

    // This is due to needing to find to items that are false

    if (filters.costParticipation.includes('has_fee_requirement')) {
      const [, stripTheTrue] = partition(internalRunner, item => item.has_fee_requirement)
      filteredByCostParticipationData = stripTheTrue
      internalRunner = stripTheTrue
    }

    if (filters.costParticipation.includes('has_age_requirement')) {
      const [stripTheFalse] = partition(internalRunner, item => item.has_age_requirement)
      filteredByCostParticipationData = stripTheFalse
      internalRunner = stripTheFalse
    }

    if (filters.costParticipation.includes('has_income_requirement')) {
      const [stripTheFalse] = partition(internalRunner, item => item.has_income_requirement)
      filteredByCostParticipationData = stripTheFalse
      internalRunner = stripTheFalse
    }
  }

  const filteredBySearchData =
    filters.search.length > 0 && filteredByCostParticipationData
      ? filteredByCostParticipationData.filter(job =>
          job.name.toLowerCase().includes(filters.search.toLowerCase())
        )
      : filteredByCostParticipationData

  if (!filteredBySearchData || filteredBySearchData?.length === 0) return <NoResultsState />

  return <PaginatedResults data={filteredBySearchData} services={services} />
}
