import { render, screen } from '@testing-library/react'
import { TextArea } from '.'

describe('TextArea Component', () => {
    test('should be rendered correctly', () => {
        render(<TextArea label="Test area" />)
        expect(screen.getByText('Test area')).toBeInTheDocument()
    })
})
