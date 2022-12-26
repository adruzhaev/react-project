import { render, screen } from '@testing-library/react'
import { AddMovieSuccessModal } from '.'

const handleModalHide = jest.fn()

describe('AddMovieSuccessModal Component', () => {
    test('should be rendered correctly', () => {
        render(<AddMovieSuccessModal
            isShown
            hide={handleModalHide}
        />)

        expect(screen.getByText('congratulations!')).toBeInTheDocument()
    })
})
