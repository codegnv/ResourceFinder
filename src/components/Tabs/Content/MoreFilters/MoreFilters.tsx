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
import {
  clearCostParticipationSelection,
  selectedCostParticipationItems,
  toggleCostParticipationSelection,
} from './costParticipationSlice'

type IDepartmentsProps = {}

const StyledDepartments = styled.div`
  margin-bottom: 25px;
  max-height: 250px;
  overflow-y: scroll;
  padding: 2px 0;
`

export function MoreFilters({}: IDepartmentsProps) {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAllDepartmentsQuery(1)
  const selectedDepartmentItems = useAppSelector(selectedDepartments)
  const selectedCostParticipation = useAppSelector(selectedCostParticipationItems)

  const handleOnCostChange = (_value: string, id: string | number) => {
    dispatch(toggleCostParticipationSelection(id as string))
  }

  const handleOnParticipationChange = (_value: string, id: string | number) => {
    dispatch(toggleCostParticipationSelection(id as string))
  }

  const handleOnProviderChange = (value: string) => {
    dispatch(toggleCheckboxSelection(value))
  }

  const handleOnClearTabs = () => {
    dispatch(clearTabSelection())
  }

  const handleOnClearDepartments = () => {
    // Will change
    dispatch(clearDepartmentsSelection())
    dispatch(clearCostParticipationSelection())
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
      <Header
        count={selectedDepartmentItems.length + selectedCostParticipation.length}
        onClear={handleOnClearDepartments}
        clearLabel={'clearFilters'}
      />
      <StyledDepartments>
        <hr />
        <Checkboxes
          items={[{ id: 'has_fee_requirement', name: 'Free Services Only' }]}
          selectedItems={selectedCostParticipation}
          onChange={handleOnCostChange}
        />
        <hr />
        <Checkboxes
          items={[
            { id: 'has_age_requirement', name: 'Age Requirement' },
            { id: 'has_income_requirement', name: 'Household Income Level' },
          ]}
          selectedItems={selectedCostParticipation}
          onChange={handleOnParticipationChange}
        />
        <hr />
        <Checkboxes
          items={data.data}
          selectedItems={selectedDepartmentItems}
          onChange={handleOnProviderChange}
        />
      </StyledDepartments>
      <Footer onClick={handleOnClearTabs} />
    </section>
  )
}
