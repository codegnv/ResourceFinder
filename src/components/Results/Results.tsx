import styled from '@emotion/styled'
import { useAppSelector } from '../../services/hooks'
import { ErrorState, LoaderState, NoResultsState } from '../shared/Status'
import { selectedCategories } from '../Tabs/Content/Categories/categoriesSlice'
import { selectedDepartments } from '../Tabs/Content/Departments/departmentsSlice'
import { PaginatedResults } from './PaginatedResults'
import { IDepartment, ITag } from './types'

export interface IResultsProps {
  services: any
}

const StyledResults = styled.section`
  padding: 24px;
`

export function Results({ services }: IResultsProps) {
  const tagSelection = useAppSelector(selectedCategories)
  const departmentSelection = useAppSelector(selectedDepartments)
  const { data, isError, isLoading } = services

  if (isError)
    return (
      <StyledResults>
        <ErrorState />
      </StyledResults>
    )

  if (isLoading)
    return (
      <StyledResults>
        <LoaderState />
      </StyledResults>
    )

  const filteredByTagData =
    tagSelection.length > 0 && data?.body
      ? data.body.filter((item: { tags: Array<ITag> }) =>
          item.tags.some((tag: ITag) => tagSelection.includes(tag.name))
        )
      : data?.body

  const filteredByDepartmentData =
    departmentSelection.length > 0 && data?.body
      ? filteredByTagData.filter((item: { departments: Array<IDepartment> }) =>
          item.departments.some((department: IDepartment) => departmentSelection.includes(department.name))
        )
      : filteredByTagData

  if (!filteredByTagData || filteredByTagData?.length === 0)
    return (
      <StyledResults>
        <NoResultsState />
      </StyledResults>
    )

  return (
    <StyledResults>
      <PaginatedResults data={filteredByDepartmentData} />
    </StyledResults>
  )
}
