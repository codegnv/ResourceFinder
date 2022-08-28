import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import searchButtonReducer from '../components/Header/Search/searchSlice'
import categoriesReducer from '../components/Tabs/Categories/categoriesSlice'
import departmentsReducer from '../components/Tabs/Departments/departmentsSlice'
import tabsReducer from '../components/Tabs/tabsSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    departments: departmentsReducer,
    tabs: tabsReducer,
    searchButton: searchButtonReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: gDM => gDM().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
