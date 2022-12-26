import { createSlice } from '@reduxjs/toolkit';
import { IFilters } from '../../types/filters';

export const initialState: IFilters = {
    sortOrder: 'desc'
}

const filters = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        changeSortingOrder: (state, action) => {
            state.sortOrder = action.payload
        }
    }
})

export const { changeSortingOrder } = filters.actions
export default filters.reducer
