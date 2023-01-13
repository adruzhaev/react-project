import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MovieContextProvider } from '../context/movie'

export default function App({ Component, pageProps }: AppProps) {
    return <MovieContextProvider>
        <Component {...pageProps} />
    </MovieContextProvider>
}
