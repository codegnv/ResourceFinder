import { MedHrLine } from '../../shared/HrLine'
import { useDispatch } from 'react-redux'
import { clearDepartmentsSelection } from 'src/components/Tabs/Content/Departments/departmentsSlice'
import { clearTagSelection } from 'src/components/Tabs/Content/Categories/categoriesSlice'
import { closeSearchbar, updateSearchText } from 'src/components/Header/Search/searchSlice'
export interface IResultsHeaderProps {
  begin: number
  end: number
  total: number
}

export function ResultsHeader({ begin, end, total }: IResultsHeaderProps) {
  const dispatch = useDispatch()
  const handleClearAllResults = () => {
    dispatch(clearDepartmentsSelection())
    dispatch(clearTagSelection())
    dispatch(closeSearchbar())
    dispatch(updateSearchText(''))
  }
  return (
    <>
      Showing{' '}
      <span style={{ fontWeight: 'bold' }}>
        {begin} - {end}
      </span>{' '}
      of <span style={{ fontWeight: 'bold' }}>{total.toLocaleString()}</span> results
      <button onClick={handleClearAllResults}> Clear All Results</button>
      <MedHrLine />
    </>
  )
}
