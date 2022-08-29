import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import router from 'next/router'
import { Button } from '../shared/Button'

const StyledAbout = styled.section`
  padding: 32px 24px;
  font: normal normal normal 22px/32px Pontano Sans;
`

const StyledAboutPara = styled.section`
  margin: 16px 0;
  font: normal normal normal 14px/32px Pontano Sans;
`

const StyledButton = styled(Button)`
  margin-top: 35px;
`

export function About() {
  const { t } = useTranslation('common')

  return (
    <>
        <StyledAbout>
            {t('aboutResourceFinder')}
            <StyledAbout>
                {t('aboutC4GnvHeader')}
            </StyledAbout>
            <StyledAboutPara>
                {t('aboutC4GnvPara1')}
            </StyledAboutPara>
            <StyledAboutPara>
                {t('aboutC4GnvPara2')}
            </StyledAboutPara>
            <StyledButton variant='arrowText' onClick={() => router.push('/')} >
                {t('aboutC4GnvLink')}
            </StyledButton>

            <StyledAboutPara>
                {t('aboutGnvHeader')}
            </StyledAboutPara>
            <StyledAboutPara>
                {t('aboutGnvPara1')}
            </StyledAboutPara>
            <StyledAboutPara>
                {t('aboutGnvPara2')}
            </StyledAboutPara>
            <StyledButton variant='arrowText' onClick={() => router.push('/')} >
                {t('aboutGnvLink')}
            </StyledButton>

            <StyledAboutPara>
                {t('aboutMyGnvHeader')}
            </StyledAboutPara>
            <StyledAboutPara>
                {t('aboutMyGnvPara1')}
            </StyledAboutPara>
            <StyledAboutPara>
                {t('aboutMyGnvPara2')}
            </StyledAboutPara>
            <StyledButton variant='arrowText' onClick={() => router.push('/')} >
                {t('aboutMyGnvLink')}
            </StyledButton>
        </StyledAbout>
    </>
  )
}
