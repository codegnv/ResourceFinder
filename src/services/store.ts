import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import checkboxesReducer from '../components/Checkboxes/checkboxesSlice'
import categoriesReducer from '../components/Tabs/Categories/categoriesSlice'
import tabsReducer from '../components/Tabs/tabsSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    checkboxes: checkboxesReducer,
    tabs: tabsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: gDM => gDM().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
