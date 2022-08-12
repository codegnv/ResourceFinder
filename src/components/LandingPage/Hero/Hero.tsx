import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import Button from '../../shared/Button'
import summer from '../../../assets/summer.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsArrowDownCircle } from 'react-icons/bs'
import Categories from 'src/components/Tabs/Categories'

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
const StyledSeasonalText = styled.section`
  display: flex;
  gap: 24px;
  padding-bottom: 32px;
  font: normal normal normal 28px/32px Pontano Sans;
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

function Hero() {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <>
      <StyledHero>
        {t('heroText')}
        <StyledCTA>{t('heroCTA')}</StyledCTA>
        <StyledButton variant='arrowText' onClick={() => router.push('/services')}>
          {t('startSearch')}
        </StyledButton>
      </StyledHero>
      <Image src={summer} alt='' layout='responsive' />
      <StyledBTF>
        <StyledSeasonalText>
          <div>
            <BsArrowDownCircle size={32} />
          </div>
          {t('seasonalPrograms')}
        </StyledSeasonalText>
        <StyledBestSummer>{t('bestSummer')}</StyledBestSummer>
        <StyledSuggestion>{t('mayWeSuggest')}</StyledSuggestion>
        <Categories hideBottomDivider hideSelectedCount /* showOnlyMobilePreferred */ />
      </StyledBTF>
    </>
  )
}

export default Hero
