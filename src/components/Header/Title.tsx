import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import siteLogo from '../../assets/siteLogo.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link'
//new imports
import { Search } from './Search'
import { useAppSelector } from 'src/services/hooks'
import { useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { isSearchbarVisible, toggleSearchbarVisible } from './Search/searchSlice'

export function Title() {
  const { t } = useTranslation('common')

  const StyledWrapper = styled.div`
    display: flex;
    height: 70px;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    font: 20px/20px Pontano Sans;
    background-color: ${props => props.theme.colors.coolMint};
  `

  const StyledLogoTitle = styled.div`
    display: flex;
    cursor: pointer;
  `

  const StyledLogo = styled.div`
    margin-right: 8px;
  `

  const StyledSearch = styled.div`
    line-height: 150%;
  `
  const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.coolMint};
    border: none;
    height: 35px;
    width: 35px;
    padding: 0;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
  `

  const dispatch = useDispatch()
  const clickSearchButton = useAppSelector(isSearchbarVisible)

  return (
    <div>
      <StyledWrapper>
        <Link href={'/'} passHref>
          <StyledLogoTitle>
            <StyledLogo>
              <Image src={siteLogo} alt='Site Logo' width='90px' height='24px' />
            </StyledLogo>
            {t('siteTitle')}
          </StyledLogoTitle>
        </Link>
        <StyledSearch>
          <StyledButton onClick={() => dispatch(toggleSearchbarVisible())}>
            <AiOutlineSearch style={{ height: '30px', width: '30px' }} />
          </StyledButton>
        </StyledSearch>
      </StyledWrapper>
      <AnimatePresence key={'searchbar'}>{clickSearchButton && <Search />}</AnimatePresence>
    </div>
  )
}
