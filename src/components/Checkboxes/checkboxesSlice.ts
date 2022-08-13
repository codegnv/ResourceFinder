import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../services/store'

export interface CheckboxesState {
  selectedCheckboxes: Array<string>
}

const initialState: CheckboxesState = {
  selectedCheckboxes: [],
}

export const checkboxesSlice = createSlice({
name: 'checkboxes',
  initialState,
  reducers: {
    toggleCheckboxSelection: (state, action: PayloadAction<string>) => {
      if (state.selectedCheckboxes.includes(action.payload)) {
        state.selectedCheckboxes = state.selectedCheckboxes.filter(item => item !== action.payload)
      } else {
        state.selectedCheckboxes = [...state.selectedCheckboxes, action.payload]
      }
    },
  },
})

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { toggleCheckboxSelection } = checkboxesSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectedCheckboxes = (state: RootState) => state.checkboxes.selectedCheckboxes

// export const selectCheckboxes = (state: RootState) => state.checkboxes
// exporting the reducer here, as we need to add this to the store
export default checkboxesSlice.reducer
