import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Button from '../../shared/Button'

export interface ICategoriesFooterProps {
  hideBottomDivider?: boolean
}

const StyledCategoriesFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
//TODO: Tabs needs to move from context to redux to get action to button

function CategoriesFooter({ hideBottomDivider }: ICategoriesFooterProps) {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <>
      {!hideBottomDivider && <hr />}
      <StyledCategoriesFooter>
        <Button onClick={() => router.push('/services')}>{t('seeResults')}</Button>
      </StyledCategoriesFooter>
    </>
  )
}
export default CategoriesFooter
