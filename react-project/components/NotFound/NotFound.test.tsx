import { render, screen } from '@testing-library/react'
import { NotFound } from '.'

describe('NotFound Component', () => {
    test('should be rendered correctly', () => {
        render(<NotFound />)
        expect(screen.getByText('Page is not found')).toBeInTheDocument()
    })
})
