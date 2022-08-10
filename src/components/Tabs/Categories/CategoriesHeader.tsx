import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import Button from '../../shared/Button'

export interface ICategoriesHeaderProps {
  count: number
  onClear: () => void
}

const StyledCategoriesHeader = styled.div`
  margin-bottom: 25px;
`
const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

function CategoriesHeader({ count, onClear }: ICategoriesHeaderProps) {
  const { t } = useTranslation('common')
  return (
    <StyledCategoriesHeader>
      <StyledRow>
        {t('selectedItems', { count })}
        <Button onClick={onClear} variant='text'>
          {t('clearFilters')}
        </Button>
      </StyledRow>
      <hr />
    </StyledCategoriesHeader>
  )
}
export default CategoriesHeader
