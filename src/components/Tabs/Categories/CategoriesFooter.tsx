import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Button from '../../shared/Button'

export interface ICategoriesProps {}

const StyledCategories = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
//TODO: Tabs needs to move from context to redux to get action to button

function Categories({}: ICategoriesProps) {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <>
      <hr />
      <StyledCategories>
        <Button onClick={() => router.push('/services')}>{t('seeResults')}</Button>
      </StyledCategories>
    </>
  )
}
export default Categories
