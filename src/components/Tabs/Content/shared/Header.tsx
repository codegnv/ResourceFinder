import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { Button } from '../../../shared/Button'

export interface IHeaderProps {
  count: number
  onClear: () => void
}

const StyledHeader = styled.div`
  margin-bottom: 25px;
`
const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export function Header({ count, onClear }: IHeaderProps) {
  const { t } = useTranslation('common')
  return (
    <StyledHeader>
      <StyledRow>
        {t('selectedItems', { count })}
        <Button onClick={onClear} variant='text'>
          {t('clearFilters')}
        </Button>
      </StyledRow>
      <hr />
    </StyledHeader>
  )
}
