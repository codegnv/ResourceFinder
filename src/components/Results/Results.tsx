import styled from '@emotion/styled'
import { useAppSelector } from '../../services/hooks'
import { ErrorState, LoaderState, NoResultsState } from '../shared/Status'
import { selectedCategories } from '../Tabs/Categories/categoriesSlice'
import { ITag } from './types'
import React from 'react'
import { PaginatedResults } from './PaginatedResults'

export interface IResultsProps {
  services: any
}

const StyledResults = styled.section`
  padding: 24px;
`

export function Results({ services }: IResultsProps) {
  const tagSelection = useAppSelector(selectedCategories)
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
      ? data.body.filter((item: { tags: ITag[] }) =>
          item.tags.some((tag: ITag) => tagSelection.includes(tag.name))
        )
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
