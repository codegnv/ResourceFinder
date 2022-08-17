import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useGetAllTagsQuery } from '../../../services/api'
import { useAppSelector } from '../../../services/hooks'
import { ErrorState, LoaderState, NoResultsState } from '../../shared/Status'
import { Tags } from '../../shared/Tags'
import { clearTabSelection } from '../tabsSlice'
import { CategoriesFooter } from './CategoriesFooter'
import { CategoriesHeader } from './CategoriesHeader'
import { clearTagSelection, selectedCategories, toggleTagSelection } from './categoriesSlice'

interface ICategoriesProps {
  variant?: 'mobileMain' | 'desktopMain' | 'default'
}

const StyledCategories = styled.div`
  margin-bottom: 30px;
  max-height: 250px;
  overflow-y: auto;
  padding: 2px 0;
`

export function Categories({ variant = 'default' }: ICategoriesProps) {
  const router = useRouter()
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAllTagsQuery(undefined)
  const selectedTags = useAppSelector(selectedCategories)

  const handleOnClick = (value: string) => {
    dispatch(toggleTagSelection(value))
  }

  const handleOnClearTabs = () => {
    variant === 'mobileMain' && router.push('/services')
    dispatch(clearTabSelection())
  }

  const handleOnClearTags = () => {
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

  const filteredTags = variant === 'mobileMain' ? data.data.filter(tag => tag.preferred_mobile) : data.data

  return (
    <section>
      {variant === 'default' && <CategoriesHeader count={selectedTags.length} onClear={handleOnClearTags} />}
      <StyledCategories>
        <Tags tags={filteredTags || data.data} selectedTags={selectedTags} onClick={handleOnClick} />
      </StyledCategories>
      <CategoriesFooter hideBottomDivider={variant !== 'default'} onClick={handleOnClearTabs} />
    </section>
  )
}
export default Categories
