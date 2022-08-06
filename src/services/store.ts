import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import tagsReducer from '../components/Tags/tagsSlice'
import checkboxesReducer from '../components/Checkboxes/checkboxesSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    checkboxes: checkboxesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: gDM => gDM().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
