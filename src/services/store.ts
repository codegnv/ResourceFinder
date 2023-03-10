import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import searchReducer from '../components/Header/Search/searchSlice'
import categoriesReducer from '../components/Tabs/Content/Categories/categoriesSlice'
import costParticipationReducer from '../components/Tabs/Content/MoreFilters/costParticipationSlice'
import departmentsReducer from '../components/Tabs/Content/MoreFilters/departmentsSlice'
import tabsReducer from '../components/Tabs/tabsSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    costParticipation: costParticipationReducer,
    departments: departmentsReducer,
    search: searchReducer,
    tabs: tabsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: gDM => gDM().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
