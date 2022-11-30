import { configureStore } from '@reduxjs/toolkit'
import { moviesApi } from '../services/movies'
import filtersReducer from './filters/slice';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        [moviesApi.reducerPath]: moviesApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
