import { RootState } from '../store';

export const getGenre = (state: RootState) => state.filters.genre
export const getSortingType = (state: RootState) => state.filters.sortBy
export const getSortingOrder = (state: RootState) => state.filters.sortOrder
