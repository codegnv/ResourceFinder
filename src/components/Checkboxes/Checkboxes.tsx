import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useGetAllDepartmentsQuery, useGetAllServicesQuery } from '../../services/api'
import { useAppSelector } from '../../services/hooks'
import Loader from '../Loader'
import Checkbox from './Checkbox'
import { selectedCheckboxes, toggleCheckboxSelection } from './checkboxesSlice'

const StyledCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  max-height: 250px;
  overflow-x: scroll;
`

function Tags() {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAllDepartmentsQuery('')
  const gas = useGetAllServicesQuery('')
  const checkboxSelection = useAppSelector(selectedCheckboxes)

  const handleOnClick = (value: string) => {
    dispatch(toggleCheckboxSelection(value))
  }

  console.log('getAllServices', gas)
  return (
    <StyledCheckboxes>
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        data?.data?.map(checkbox => (
          <Checkbox key={checkbox.id} checkbox={checkbox} selected={checkboxSelection.includes(checkbox.name)} onClick={handleOnClick} />
        ))
      ) : null}
    </StyledCheckboxes>
  )
}
export default Tags