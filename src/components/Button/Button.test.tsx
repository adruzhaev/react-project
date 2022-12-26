import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button Component', () => {
    test('should be rendered correctly', () => {
        render(<Button
            title='Test button'
        />)

        expect(screen.getByText('Test button')).toBeInTheDocument()
    })
})
