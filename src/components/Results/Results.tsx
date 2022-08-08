import styled from '@emotion/styled'
import { useGetAllServicesQuery } from '../../services/api'
import { ErrorState, LoaderState, NoResultsState } from '../Status'
import ResultsHeader from './Header'
import Item from './Item'

type Props = {}

const StyledResults = styled.section`
  padding: 24px;
`

function Results({}: Props) {
  const { data, isError, isLoading } = useGetAllServicesQuery('')

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

  if (!data?.data)
    return (
      <StyledResults>
        <NoResultsState />
      </StyledResults>
    )

  const ResultsItems = data.data.map(item => (
    <Item
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
      <ResultsHeader begin={1} end={data.data.length} total={data.data.length} />
      {ResultsItems}
    </StyledResults>
  )
}

export default Results
