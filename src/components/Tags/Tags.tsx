import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useGetAllTagsQuery } from '../../services/api'
import { useAppSelector } from '../../services/hooks'
import { ErrorState, LoaderState, NoResultsState } from '../Status'
import Tag from './Tag'
import { selectedTags, toggleTagSelection } from './tagsSlice'

const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 25px;
  max-height: 250px;
  overflow-x: scroll;
`

function Tags() {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAllTagsQuery('')
  const tagSelection = useAppSelector(selectedTags)

  const handleOnClick = (value: string) => {
    dispatch(toggleTagSelection(value))
  }

  if (isError)
    return (
      <StyledTags>
        <ErrorState />
      </StyledTags>
    )

  if (isLoading)
    return (
      <StyledTags>
        <LoaderState />
      </StyledTags>
    )

  if (!data?.data)
    return (
      <StyledTags>
        <NoResultsState />
      </StyledTags>
    )

  const ResultsItems = data.data.map(tag => (
    <Tag key={tag.id} tag={tag} selected={tagSelection.includes(tag.name)} onClick={handleOnClick} />
  ))

  return <StyledTags>{ResultsItems}</StyledTags>
}
export default Tags
