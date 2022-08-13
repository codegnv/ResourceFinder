import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../services/store'

export interface TabsState {
  selectedTab: string
}

const initialState: TabsState = {
  selectedTab: '',
}

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    toggleTabSelection: (state, action: PayloadAction<string>) => {
      if (state.selectedTab === action.payload) {
        state.selectedTab = ''
      } else {
        state.selectedTab = action.payload
      }
    },
    clearTabSelection: state => {
      state.selectedTab = ''
    },
  },
})

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { clearTabSelection, toggleTabSelection } = tabsSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectedTab = (state: RootState) => state.tabs.selectedTab

// export const selectTabs = (state: RootState) => state.tabs
// exporting the reducer here, as we need to add this to the store
export default tabsSlice.reducer
