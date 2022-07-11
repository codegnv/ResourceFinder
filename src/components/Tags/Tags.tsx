import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useGetAllTagsQuery, useGetAllServicesQuery } from '../../services/api'
import { useAppSelector } from '../../services/hooks'
import Loader from '../Loader'
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
  const gas = useGetAllServicesQuery('')
  const tagSelection = useAppSelector(selectedTags)

  const handleOnClick = (value: string) => {
    dispatch(toggleTagSelection(value))
  }

  console.log('getAllServices', gas)
  return (
    <StyledTags>
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        data?.data?.map(tag => (
          <Tag key={tag.id} tag={tag} selected={tagSelection.includes(tag.name)} onClick={handleOnClick} />
        ))
      ) : null}
    </StyledTags>
  )
}
export default Tags
