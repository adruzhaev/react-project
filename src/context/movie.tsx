import { createContext, ReactNode, useState } from 'react';
import { IMovie } from '../types/movie';

export interface IMovieContext {
    isHeader: boolean
    movie: IMovie,
    switchToHeader: () => void
    switchToMovieDetails: (id: number) => void
}

export const MovieContext = createContext<IMovieContext>({
    isHeader: true,
    switchToHeader: () => {},
    switchToMovieDetails: () => {},
    movie: {} as IMovie,
})

export const MovieContextProvider = (props: {
    children: ReactNode
}) => {
    const [isHeader, setIsHeader] = useState<boolean>(true)
    const [movie, setMovie] = useState<IMovie>({} as IMovie)

    const switchToHeader = () => setIsHeader(true)

    const switchToMovieDetails = (id: number) => {
        setIsHeader(false)
    }

    return <MovieContext.Provider value={{isHeader, switchToHeader, switchToMovieDetails, movie}}>
        {props.children}
    </MovieContext.Provider>
}
