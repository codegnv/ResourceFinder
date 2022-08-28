import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { Button } from '../../../shared/Button'

export interface ICategoriesFooterProps {
  hideBottomDivider?: boolean
  onClick: () => void
}

const StyledCategoriesFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export function Footer({ hideBottomDivider, onClick }: ICategoriesFooterProps) {
  const { t } = useTranslation('common')

  return (
    <>
      {!hideBottomDivider && <hr />}
      <StyledCategoriesFooter>
        <Button onClick={onClick}>{t('seeResults')}</Button>
      </StyledCategoriesFooter>
    </>
  )
}
