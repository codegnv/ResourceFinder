import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Button } from 'src/components/shared/Button'
import { closeSearchbar, updateSearchText } from './searchSlice'

export function Search() {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')

  const StyledWrapper = styled(motion.div)`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: ${props => `${props.theme.colors.baseDark} 1px solid`};
  `

  const StyledLogoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 57px;
    width: 31px;
    background-color: ${props => props.theme.colors.secondary};
    border-left: ${props => `${props.theme.colors.secondary} 1px solid`};
    border-right: ${props => `${props.theme.colors.baseDark} 1px solid`};
    font-size: 20px;
  `

  const StyledInput = styled.input`
    display: block;
    width: 100%;
    height: 57px;
    padding: 0 90px 0 40px;
    border: none;
    font: 16px Pontano Sans;
  `

  const StyledCancelButton = styled(Button)`
    position: absolute;
    right: 15px;
    top: 22px;
  `
  const handleCancel = () => {
    dispatch(closeSearchbar())
    dispatch(updateSearchText(''))
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    dispatch(updateSearchText(event.target.value))
  }

  return (
    <StyledWrapper
      key={'searchbar'}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <StyledLogoWrapper>
        <AiOutlineSearch />
      </StyledLogoWrapper>
      <StyledInput type='text' placeholder={t('searchPlaceholder')} onChange={handleInputChange} />
      <StyledCancelButton variant='text' onClick={handleCancel}>
        {t('cancel')}
      </StyledCancelButton>
    </StyledWrapper>
  )
}
