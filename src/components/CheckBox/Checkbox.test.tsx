import { render, screen } from '@testing-library/react'
import { CheckBox } from '.'

describe('CheckBox Component', () => {
    test('should be rendered correctly', () => {
        render(<CheckBox
            isChecked
            label="Test checkbox"
            onChange={jest.fn()}
        />)

        expect(screen.getByText('Test checkbox')).toBeInTheDocument()
    })
})
