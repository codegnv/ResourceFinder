import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import router from 'next/router'

const StyledBTF = styled.section`
  padding: 32px 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.base};
  color: ${props => props.theme.colors.baseLight};
`

const StyledA = styled.a`
    cursor: pointer;
    font: normal normal 14px/28px Inter;
`

export function Footer() {
  const { t } = useTranslation('common')

  return (
    <>
        <StyledBTF>
            <StyledA onClick={() => router.push('/about')}>
                {t('about')}
            </StyledA>
            {t('officialWebsite')}
        </StyledBTF>
    </>
  )
}
