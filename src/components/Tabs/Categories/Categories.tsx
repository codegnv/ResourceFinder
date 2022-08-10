import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useGetAllTagsQuery } from '../../../services/api'
import { useAppSelector } from '../../../services/hooks'
import { ErrorState, LoaderState, NoResultsState } from '../../shared/Status'
import CategoriesHeader from './CategoriesHeader'
import Tag from '../../shared/Tag'
import { clearTagSelection, selectedCategories, toggleTagSelection } from './categoriesSlice'
import CategoriesFooter from './CategoriesFooter'

interface ICategoriesProps {
  hideSelectedCount?: boolean
}

const StyledCategories = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 30px;
  max-height: 250px;
  overflow-y: scroll;
`

function Categories({ hideSelectedCount }: ICategoriesProps) {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAllTagsQuery(undefined)
  const tagSelection = useAppSelector(selectedCategories)

  const handleOnClick = (value: string) => {
    dispatch(toggleTagSelection(value))
  }

  const handleOnClear = () => {
    dispatch(clearTagSelection())
  }

  if (isError)
    return (
      <StyledCategories>
        <ErrorState />
      </StyledCategories>
    )

  if (isLoading)
    return (
      <StyledCategories>
        <LoaderState />
      </StyledCategories>
    )

  if (!data?.data)
    return (
      <StyledCategories>
        <NoResultsState />
      </StyledCategories>
    )

  const ResultsItems = data.data.map(tag => (
    <Tag key={tag.id} tag={tag} selected={tagSelection.includes(tag.name)} onClick={handleOnClick} />
  ))

  return (
    <>
      {!hideSelectedCount && <CategoriesHeader count={tagSelection.length} onClear={handleOnClear} />}
      <StyledCategories>{ResultsItems}</StyledCategories>
      <CategoriesFooter />
    </>
  )
}
export default Categories
