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

export const { clearTabSelection, toggleTabSelection } = tabsSlice.actions

export const selectedTab = (state: RootState) => state.tabs.selectedTab

export default tabsSlice.reducer
