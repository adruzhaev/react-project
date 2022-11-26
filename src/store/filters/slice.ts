import { createSlice } from '@reduxjs/toolkit';
import { IFilters } from '../../types/filters';

export const initialState: IFilters = {
    genre: 'All',
    sortBy: 'Release date',
    sortOrder: 'desc'
}

const filters = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        changeGenre: (state, action) => {
            state.genre = action.payload
        },
        changeSortingType: (state, action) => {
            state.sortBy = action.payload
        },
        changeSortingOrder: (state, action) => {
            state.sortOrder = action.payload
        }
    }
})

export const { changeGenre, changeSortingType, changeSortingOrder } = filters.actions
export default filters.reducer
