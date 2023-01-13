import { createContext, ReactNode, useState } from 'react';

export interface IMovieContext {
    isHeader: boolean
    movieId: string,
    switchToHeader: () => void
    switchToMovieDetails: (id: number) => void
}

export const MovieContext = createContext<IMovieContext>({
    isHeader: true,
    switchToHeader: () => {},
    switchToMovieDetails: () => {},
    movieId: '',
})

export const MovieContextProvider = (props: {
    children: ReactNode
}) => {
    const [isHeader, setIsHeader] = useState<boolean>(true)
    const [movieId, setMovieId] = useState('')

    const switchToHeader = () => setIsHeader(true)

    const switchToMovieDetails = (id: number) => {
        setMovieId(id.toString())
        setIsHeader(false)
    }

    return <MovieContext.Provider value={{isHeader, switchToHeader, switchToMovieDetails, movieId}}>
        {props.children}
    </MovieContext.Provider>
}
