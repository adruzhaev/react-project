import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MovieGenres } from '.'

describe('MovieGenres Component', () => {
    test('should be rendered correctly', () => {
        render(<MovieGenres />, { wrapper: BrowserRouter })
        expect(screen.getAllByRole('button')).toHaveLength(5)
    })

    test('should change className after user\'s click', () => {
        render(<MovieGenres />, { wrapper: BrowserRouter })
        const genreButton = screen.getAllByRole('button')[0]
        const clickedGenreButton = screen.getAllByRole('button')[1]

        fireEvent.click(clickedGenreButton)
        expect(clickedGenreButton.classList.contains('title-active')).toBeTruthy()
        expect(genreButton.classList.contains('title-active')).toBeFalsy()
    })
})
