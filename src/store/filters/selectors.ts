import { RootState } from '../store';

export const getSortingOrder = (state: RootState) => state.filters.sortOrder
