import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/services/store";

export interface searchButtonState {
    searchButtonClicked: boolean;
}

const initialState: searchButtonState = {
    searchButtonClicked: false,
}

const searchButtonSlice = createSlice({
    name: 'searchButton',
    initialState,
    reducers: {
        toggleShowSearchbar: (state, action: PayloadAction<boolean>) => {
            if (state.searchButtonClicked === action.payload){
                state.searchButtonClicked = true;
            }
            else {
                state.searchButtonClicked = false;
            }
        },
    },
})


export const { toggleShowSearchbar } = searchButtonSlice.actions

export const searchButtonClicked = (state: RootState) => state.searchButton.searchButtonClicked

export default searchButtonSlice.reducer
