import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { Checkboxes } from '../../../shared/Checkboxes'
import { clearDepartmentsSelection, selectedDepartments, toggleCheckboxSelection } from './departmentsSlice'
import { ErrorState, LoaderState, NoResultsState } from '../../../shared/Status'
import { useGetAllDepartmentsQuery } from '../../../../services/api'
import { useAppSelector } from '../../../../services/hooks'
import { Header } from '../shared/Header'
import { Footer } from '../shared/Footer'
import { clearTabSelection } from '../../tabsSlice'

type IDepartmentsProps = {}

const StyledDepartments = styled.div`
  margin-bottom: 25px;
  max-height: 250px;
  overflow-y: scroll;
  padding: 2px 0;
`

export function Departments({}: IDepartmentsProps) {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAllDepartmentsQuery('')
  const selectedItems = useAppSelector(selectedDepartments)

  const handleOnChange = (value: string) => {
    dispatch(toggleCheckboxSelection(value))
  }

  const handleOnClearTabs = () => {
    dispatch(clearTabSelection())
  }

  const handleOnClearDepartments = () => {
    dispatch(clearDepartmentsSelection())
  }

  if (isError)
    return (
      <StyledDepartments>
        <ErrorState />
      </StyledDepartments>
    )

  if (isLoading)
    return (
      <StyledDepartments>
        <LoaderState />
      </StyledDepartments>
    )

  if (!data?.data)
    return (
      <StyledDepartments>
        <NoResultsState />
      </StyledDepartments>
    )

  return (
    <section>
      <Header count={selectedItems.length} onClear={handleOnClearDepartments} />
      <StyledDepartments>
        <Checkboxes items={data.data} selectedItems={selectedItems} onChange={handleOnChange} />
      </StyledDepartments>
      <Footer onClick={handleOnClearTabs} />
    </section>
  )
}
