/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../../services/store'

export interface CostParticipationState {
  selectedItems: Array<any>
}

const initialState: CostParticipationState = {
  selectedItems: [],
}

export const costParticipationSlice = createSlice({
  name: 'costParticipation',
  initialState,
  reducers: {
    toggleCostParticipationSelection: (state, action: PayloadAction<string>) => {
      if (state.selectedItems.includes(action.payload)) {
        const index = state.selectedItems.findIndex(a => a === action.payload)
        state.selectedItems.splice(index, 1)
      } else {
        state.selectedItems = [...state.selectedItems, action.payload]
      }
    },
    clearCostParticipationSelection: state => {
      state.selectedItems = []
    },
  },
})

export const { clearCostParticipationSelection, toggleCostParticipationSelection } =
  costParticipationSlice.actions

export const selectedCostParticipationItems = (state: RootState) => state.costParticipation.selectedItems

export default costParticipationSlice.reducer
