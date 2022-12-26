import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Search } from '.'

describe('Search Component', () => {
    test('should be rendered correctly', () => {
        expect(render(<Search />, { wrapper: BrowserRouter })).toMatchSnapshot()
    })
})
