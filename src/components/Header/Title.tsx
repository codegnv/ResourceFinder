import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import siteLogo from '../../assets/siteLogo.svg'
import { AiOutlineSearch } from 'react-icons/ai'
function Title() {
  const { t } = useTranslation('common')

  const StyledWrapper = styled.div`
    height: 70px;
    background-color: ${props => props.theme.colors.coolMint};
    display: flex;
    align-items: center;
    font-family: 'Pontano Sans';
    font-size: 20px;
    padding: 0 20px;
    justify-content: space-between;
  `

  const StyledLogoTitle = styled.div`
    display: flex;
  `

  const StyledLogo = styled.div`
    padding-right: 8px;
  `
  const StyledSearch = styled.div`
    line-height: 150%;
  `
  return (
    <StyledWrapper>
      <StyledLogoTitle>
        <StyledLogo>
          <Image src={siteLogo} alt='Site Logo' width='90px' height='24px' />
        </StyledLogo>
        {t('siteTitle')}
      </StyledLogoTitle>
      <StyledSearch>
        <AiOutlineSearch />
      </StyledSearch>
    </StyledWrapper>
  )
}

export default Title
