import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import siteLogo from '../../assets/siteLogo.svg'
import { Container } from '../shared/Layout'
import { useScreenSize } from '../shared/Layout/useScreenSize'

export function Title() {
  const { t } = useTranslation('common')
  const screenSize = useScreenSize()

  const StyledWrapper = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    font-family: 'Pontano Sans';
    font-size: 20px;
    line-height: 20px;
    justify-content: space-between;
  `

  const StyledLogoTitle = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
  `

  const StyledLogo = styled.div`
    margin-right: 8px;
    line-height: 0;
    margin-bottom: -3px;
  `

  const StyledSearch = styled.div`
    line-height: 150%;
  `

  // TODO: fix the color
  return (
    <Container backgroundColor={'#E0F7F6'}>
      <StyledWrapper>
        <Link href={'/'} passHref>
          <StyledLogoTitle>
            <StyledLogo>
              <Image src={siteLogo} alt='Site Logo' width='90px' height='24px' />
            </StyledLogo>
            {t('siteTitle')}
          </StyledLogoTitle>
        </Link>
        {screenSize !== 'desktop' && (
          <StyledSearch>
            <AiOutlineSearch />
          </StyledSearch>
        )}
      </StyledWrapper>
    </Container>
  )
}
