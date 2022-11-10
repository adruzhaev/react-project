import { createContext, ReactNode, useEffect, useState } from 'react';
import { IMovie } from '../types/movie';
import { movies as mockMovies } from '../data/movies';

export interface IMovieContext {
    isHeader: boolean
    movie: IMovie,
    movies: Array<IMovie>
    switchToHeader: () => void
    switchToMovieDetails: (id: number) => void
}

export const MovieContext = createContext<IMovieContext>({
    isHeader: true,
    switchToHeader: () => {},
    switchToMovieDetails: () => {},
    movie: {} as IMovie,
    movies: []
})

export const MovieContextProvider = (props: {
    children: ReactNode
}) => {
    const [isHeader, setIsHeader] = useState<boolean>(true)
    const [movies, setMovies] = useState<Array<IMovie>>([])
    const [movie, setMovie] = useState<IMovie>({} as IMovie)

    const switchToHeader = () => setIsHeader(true)

    const switchToMovieDetails = (id: number) => {
        setIsHeader(false)
        setMovie(movies.find(item => item.id === id)!)
    }

    useEffect(() => {
        setMovies(mockMovies)
    }, [])

    return <MovieContext.Provider value={{isHeader, switchToHeader, switchToMovieDetails, movie, movies}}>
        {props.children}
    </MovieContext.Provider>
}
