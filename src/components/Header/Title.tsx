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
import { searchButtonClicked, showSearchbar } from './Search/searchSlice'

export function Title() {
  const { t } = useTranslation('common')

  const StyledWrapper = styled.div`
    height: 70px;
    background-color: ${props => props.theme.colors.coolMint};
    display: flex;
    align-items: center;
    font-family: 'Pontano Sans';
    font-size: 20px;
    line-height: 20px;
    padding: 0 20px;
    justify-content: space-between;
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
  const dispatch = useDispatch();
  const clickSearchButton = useAppSelector(searchButtonClicked);
  console.log(clickSearchButton)

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
          <button onClick={() => dispatch(showSearchbar(clickSearchButton))}>
            <AiOutlineSearch />
          </button>
        </StyledSearch>
      </StyledWrapper>
      {clickSearchButton ? <Search/> : null}
    </div>
  )
}
