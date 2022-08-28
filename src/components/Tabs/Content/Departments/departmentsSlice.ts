import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../../services/store'

export interface DepartmentsState {
  selectedDepartments: Array<string>
}

const initialState: DepartmentsState = {
  selectedDepartments: [],
}

export const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    toggleCheckboxSelection: (state, action: PayloadAction<string>) => {
      if (state.selectedDepartments.includes(action.payload)) {
        state.selectedDepartments = state.selectedDepartments.filter(item => item !== action.payload)
      } else {
        state.selectedDepartments = [...state.selectedDepartments, action.payload]
      }
    },
    clearDepartmentsSelection: state => {
      state.selectedDepartments = []
    },
  },
})

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { clearDepartmentsSelection, toggleCheckboxSelection } = departmentsSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectedDepartments = (state: RootState) => state.departments.selectedDepartments

// export const selectDepartments = (state: RootState) => state.departments
// exporting the reducer here, as we need to add this to the store
export default departmentsSlice.reducer
