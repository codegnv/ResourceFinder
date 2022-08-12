import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import Tags from 'src/components/shared/Tags'
import { useGetAllTagsQuery } from '../../../services/api'
import { useAppSelector } from '../../../services/hooks'
import { ErrorState, LoaderState, NoResultsState } from '../../shared/Status'
import CategoriesFooter, { ICategoriesFooterProps } from './CategoriesFooter'
import CategoriesHeader from './CategoriesHeader'
import { clearTagSelection, selectedCategories, toggleTagSelection } from './categoriesSlice'

interface ICategoriesProps extends ICategoriesFooterProps {
  hideSelectedCount?: boolean
  showOnlyDesktopPreferred?: boolean
  showOnlyMobilePreferred?: boolean
}

const StyledCategories = styled.div`
  margin-bottom: 30px;
  max-height: 250px;
  overflow-y: auto;
`

function Categories({ hideBottomDivider, hideSelectedCount, showOnlyMobilePreferred }: ICategoriesProps) {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAllTagsQuery(undefined)
  const selectedTags = useAppSelector(selectedCategories)

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

  const filteredTags = showOnlyMobilePreferred ? data.data.filter(tag => tag.preferred) : data.data

  return (
    <>
      {!hideSelectedCount && <CategoriesHeader count={selectedTags.length} onClear={handleOnClear} />}
      <StyledCategories>
        <Tags tags={filteredTags || data.data} selectedTags={selectedTags} onClick={handleOnClick} />
      </StyledCategories>
      <CategoriesFooter hideBottomDivider={hideBottomDivider} />
    </>
  )
}
export default Categories
