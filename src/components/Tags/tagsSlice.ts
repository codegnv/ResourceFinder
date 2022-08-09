import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../services/store'

export interface TagsState {
  selectedTags: Array<string>
}

const initialState: TagsState = {
  selectedTags: [],
}

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    toggleTagSelection: (state, action: PayloadAction<string>) => {
      if (state.selectedTags.includes(action.payload)) {
        state.selectedTags = state.selectedTags.filter(item => item !== action.payload)
      } else {
        state.selectedTags = [...state.selectedTags, action.payload]
      }
    },
    clearTagSelection: state => {
      state.selectedTags = []
    },
  },
})

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { clearTagSelection, toggleTagSelection } = tagsSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectedTags = (state: RootState) => state.tags.selectedTags

// export const selectTags = (state: RootState) => state.tags
// exporting the reducer here, as we need to add this to the store
export default tagsSlice.reducer
