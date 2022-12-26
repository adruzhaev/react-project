import { render, screen, fireEvent } from '@testing-library/react'
import { Select } from '.'

const options = ['First', 'Second']
describe('Select Component', () => {
    test('should be rendered correctly', () => {
        render(<Select options={options} label="Test select" onChange={jest.fn()} />)
        expect(screen.getByText('Test select')).toBeInTheDocument()
    })

    test('should show the options list after click', () => {
        render(<Select options={options} label="Test select" onChange={jest.fn()} />)
        const input = screen.getByRole('textbox')
        fireEvent.click(input)
        expect(screen.getByText('First')).toBeInTheDocument()
    })
})
