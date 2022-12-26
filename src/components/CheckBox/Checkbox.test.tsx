import { render, screen } from '@testing-library/react'
import { CheckBox } from '.'

describe('CheckBox Component', () => {
    test('should be rendered correctly', () => {
        render(<CheckBox
            isChecked
            label="Test checkbox"
        />)

        expect(screen.getByText('Test checkbox')).toBeInTheDocument()
    })
})
