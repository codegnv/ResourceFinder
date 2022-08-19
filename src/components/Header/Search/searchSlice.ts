import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/services/store'

export interface searchButtonState {
  searchButtonClicked: boolean
}

const initialState: searchButtonState = {
  searchButtonClicked: false,
}

const searchButtonSlice = createSlice({
  name: 'searchButton',
  initialState,
  reducers: {
    showSearchbar: state => {
      if (state.searchButtonClicked === false) {
        state.searchButtonClicked = true
      } else {
        state.searchButtonClicked = false
      }
    },
    closeSearchbar: state => {
      state.searchButtonClicked = false
    },
  },
})

export const { showSearchbar, closeSearchbar } = searchButtonSlice.actions

export const searchButtonClicked = (state: RootState) => state.searchButton.searchButtonClicked

export default searchButtonSlice.reducer
