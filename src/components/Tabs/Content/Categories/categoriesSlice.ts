import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../../services/store'

export interface CategoriesState {
  selectedCategories: Array<string>
}

const initialState: CategoriesState = {
  selectedCategories: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleTagSelection: (state, action: PayloadAction<string>) => {
      if (state.selectedCategories.includes(action.payload)) {
        state.selectedCategories = state.selectedCategories.filter(item => item !== action.payload)
      } else {
        state.selectedCategories = [...state.selectedCategories, action.payload]
      }
    },
    clearTagSelection: state => {
      state.selectedCategories = []
    },
  },
})

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { clearTagSelection, toggleTagSelection } = categoriesSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectedCategories = (state: RootState) => state.categories.selectedCategories

// export const selectCategories = (state: RootState) => state.categories
// exporting the reducer here, as we need to add this to the store
export default categoriesSlice.reducer
