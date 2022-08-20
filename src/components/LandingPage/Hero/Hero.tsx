import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import summer from '../../../assets/summer.png'
import { Button } from '../../shared/Button'
import { Categories } from '../../Tabs/Categories'

const StyledHero = styled.section`
  padding: 32px 24px;
  font: normal normal normal 22px/32px Pontano Sans;
`

const StyledCTA = styled.section`
  margin: 16px 0;
`

const StyledButton = styled(Button)`
  margin-top: 35px;
`

const StyledBTF = styled.section`
  padding: 32px 24px;
  background-color: ${props => props.theme.colors.base};
  color: ${props => props.theme.colors.baseLight};
`

const StyledBestSummer = styled.section`
  padding-bottom: 32px;
  padding-right: 100px;
  font: normal normal normal 22px/32px Pontano Sans;
`

const StyledSuggestion = styled.div`
  padding-bottom: 32px;
  font: normal normal bold 13px/28px Inter;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 8px;
  letter-spacing: 1.3px;
`

export function Hero() {
  const { t } = useTranslation('common')
  return (
    <>
      <StyledHero>
        {t('heroText')}
        <StyledCTA>{t('heroCTA')}</StyledCTA>
        <Link href={'/services'} passHref>
          <StyledButton variant='arrowText'>{t('startSearch')}</StyledButton>
        </Link>
      </StyledHero>
      <Image src={summer} alt='' layout='responsive' />
      <StyledBTF>
        <StyledBestSummer>{t('bestSummer')}</StyledBestSummer>
        <StyledSuggestion>{t('mayWeSuggest')}</StyledSuggestion>
        <Categories variant='mobileMain' />
      </StyledBTF>
    </>
  )
}
