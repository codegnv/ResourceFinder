import { MedHrLine } from '../../shared/HrLine'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { clearDepartmentsSelection } from 'src/components/Tabs/Content/Departments/departmentsSlice'
import { clearTagSelection } from 'src/components/Tabs/Content/Categories/categoriesSlice'
import { closeSearchbar, updateSearchText } from 'src/components/Header/Search/searchSlice'
import { Button } from 'src/components/shared/Button'
import useTranslation from 'next-translate/useTranslation'

export interface IResultsHeaderProps {
  begin: number
  end: number
  total: number
}

export function ResultsHeader({ begin, end, total }: IResultsHeaderProps) {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const handleClearAllResults = () => {
    dispatch(clearDepartmentsSelection())
    dispatch(clearTagSelection())
    dispatch(closeSearchbar())
    dispatch(updateSearchText(''))
  }

  const StyledButton = styled(Button)``
  const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `
  return (
    <>
      <StyledWrapper>
        <div>
          Showing{' '}
          <span style={{ fontWeight: 'bold' }}>
            {begin} - {end}
          </span>{' '}
          of <span style={{ fontWeight: 'bold' }}>{total.toLocaleString()}</span> results
        </div>
        <StyledButton variant='text' onClick={handleClearAllResults}>
          {t('clearAllFilters')}
        </StyledButton>
      </StyledWrapper>
      <MedHrLine />
    </>
  )
}
