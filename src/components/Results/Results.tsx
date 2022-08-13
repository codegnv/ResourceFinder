import styled from '@emotion/styled'
import { useGetAllServicesQuery } from '../../services/api'
import { useAppSelector } from '../../services/hooks'
import { ErrorState, LoaderState, NoResultsState } from '../shared/Status'
import { selectedCategories } from '../Tabs/Categories/categoriesSlice'
import ResultsHeader from './ResultsHeader'
import ResultsItem from './ResultsItem'
import { ITag } from './types'

const StyledResults = styled.section`
  padding: 24px;
`

export function Results() {
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

  const ResultsItems = filteredByTagData.map(item => (
    <ResultsItem
      name={item.name}
      criteria={item.criteria}
      description={
        item.description ||
        'Lorem ipsum ut eu non esse laboris sint exercitation commodo consectetur dolor ipsum. Fugiat ut ea ea excepteur exercitation. Proident excepteur incididunt irure cillum sit laboris sit deserunt et cillum officia sit excepteur.'
      }
      programs={item.programs}
      departments={item.departments}
      key={item.name}
    />
  ))

  return (
    <StyledResults>
      <ResultsHeader begin={1} end={filteredByTagData.length} total={filteredByTagData.length} />
      {ResultsItems}
    </StyledResults>
  )
}
