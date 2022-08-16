import styled from '@emotion/styled'
import { useGetAllServicesQuery } from '../../services/api'
import { useAppSelector } from '../../services/hooks'
import { ErrorState, LoaderState, NoResultsState } from '../shared/Status'
import { selectedCategories } from '../Tabs/Categories/categoriesSlice'
import { ITag } from './types'
import React from 'react'
import { PaginatedResults } from './PaginatedResults'

const StyledResults = styled.section`
  padding: 24px;
`

export function Results({}) {
  const tagSelection = useAppSelector(selectedCategories)
  const { data, isError, isLoading } = useGetAllServicesQuery(undefined)

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
      ? data.body.filter(item => item.tags.some((tag: ITag) => tagSelection.includes(tag.name)))
      : data?.body

  if (!filteredByTagData || filteredByTagData?.length === 0)
    return (
      <StyledResults>
        <NoResultsState />
      </StyledResults>
    )

  return (
    <StyledResults>
      <PaginatedResults data={filteredByTagData} />
    </StyledResults>
  )
}
