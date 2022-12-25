import filtersReducer, { initialState, changeSortingOrder } from './slice'

describe('Filters reducer', () => {
    test('Change sorting order to desc', () => {
        expect(filtersReducer(initialState, changeSortingOrder('desc'))).toEqual({
            ...initialState,
            sortOrder: 'desc'
        })
    })

    test('Change sorting order to asc', () => {
        expect(filtersReducer(initialState, changeSortingOrder('asc'))).toEqual({
            ...initialState,
            sortOrder: 'asc'
        })
    })
})
