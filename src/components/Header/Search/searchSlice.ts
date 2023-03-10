import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/services/store'

export interface SearchState {
  isSearchbarVisible: boolean
  searchText: string
}

const initialState: SearchState = {
  isSearchbarVisible: false,
  searchText: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleSearchbarVisible: state => {
      if (state.isSearchbarVisible) {
        state.isSearchbarVisible = false
      } else {
        state.isSearchbarVisible = true
      }
    },
    closeSearchbar: state => {
      state.isSearchbarVisible = false
    },
    updateSearchText: (state, action) => {
      state.searchText = action.payload
    },
  },
})

export const { closeSearchbar, toggleSearchbarVisible, updateSearchText } = searchSlice.actions

export const isSearchbarVisible = (state: RootState) => state.search.isSearchbarVisible
export const searchText = (state: RootState) => state.search.searchText

export default searchSlice.reducer
