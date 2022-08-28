import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { Checkboxes } from '../../shared/Checkboxes'
import { selectedDepartments, toggleCheckboxSelection } from './departmentsSlice'
import { ErrorState, LoaderState, NoResultsState } from '../../shared/Status'
import { useGetAllDepartmentsQuery } from '../../../services/api'
import { useAppSelector } from '../../../services/hooks'

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
  const checkboxSelection = useAppSelector(selectedDepartments)

  const handleOnClick = (value: string) => {
    dispatch(toggleCheckboxSelection(value))
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
    <StyledDepartments>
      <Checkboxes items={data.data} selectedItems={checkboxSelection} onClick={handleOnClick} />
    </StyledDepartments>
  )
}
