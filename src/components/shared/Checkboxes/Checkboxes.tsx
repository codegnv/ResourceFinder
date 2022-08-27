import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useGetAllDepartmentsQuery } from '../../../services/api'
import { useAppSelector } from '../../../services/hooks'
import { LoaderState } from '../Status'
import { Checkbox } from './Checkbox'
import { selectedCheckboxes, toggleCheckboxSelection } from './checkboxesSlice'

const StyledCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  max-height: 250px;
  overflow-x: scroll;
`

export function Checkboxes() {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAllDepartmentsQuery('')
  const checkboxSelection = useAppSelector(selectedCheckboxes)

  const handleOnClick = (value: string) => {
    dispatch(toggleCheckboxSelection(value))
  }

  return (
    <StyledCheckboxes>
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <LoaderState />
      ) : data ? (
        data?.data?.map(checkbox => (
          <Checkbox
            key={checkbox.id}
            checkbox={checkbox}
            selected={checkboxSelection.includes(checkbox.name)}
            onClick={handleOnClick}
          />
        ))
      ) : null}
    </StyledCheckboxes>
  )
}
