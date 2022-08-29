import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import router from 'next/router'
import { Button } from '../shared/Button'
import mygnv from '../../assets/mygnv.svg'
import Image from 'next/image'
import { SmBaseHrLine } from '../shared/HrLine'

const StyledAbout = styled.section`
  padding: 32px 24px;
  font: normal normal normal 22px/32px Pontano Sans;
`

const StyledAboutHeader = styled.section`
margin: 16px 0;
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
            <StyledAboutHeader>
                {t('aboutC4GnvHeader')}
            </StyledAboutHeader>
            <StyledAboutPara>
                {t('aboutC4GnvPara1')}
            </StyledAboutPara>
            <StyledAboutPara>
                {t('aboutC4GnvPara2')}
            </StyledAboutPara>
            <StyledButton variant='arrowText' onClick={() => router.push('/')} >
                {t('aboutC4GnvLink')}
            </StyledButton>
            <SmBaseHrLine />

            <StyledAboutHeader>
                {t('aboutGnvHeader')}
            </StyledAboutHeader>
            <StyledAboutPara>
                {t('aboutGnvPara1')}
            </StyledAboutPara>
            <StyledAboutPara>
                {t('aboutGnvPara2')}
            </StyledAboutPara>
            <StyledButton variant='arrowText' onClick={() => router.push('/')} >
                {t('aboutGnvLink')}
            </StyledButton>
            <SmBaseHrLine />

            <Image src={mygnv} alt='myGNV logo' width='209px' height='55px' />
            <StyledAboutHeader>
                {t('aboutMyGnvHeader')}
            </StyledAboutHeader>
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
