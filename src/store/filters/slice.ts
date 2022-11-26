import { createSlice } from '@reduxjs/toolkit';
import { IFilters } from '../../types/filters';

export const initialState: IFilters = {
    genre: 'All'
}

const filters = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        changeGenre: (state, action) => {
            state.genre = action.payload
        }
    }
})

export const { changeGenre } = filters.actions
export default filters.reducer
