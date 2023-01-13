import { useContext } from 'react'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MovieDetails } from '../../components/MovieDetails'
import { MoviesList } from '../../components/MoviesList'
import { MovieContext } from '../../context/movie'
import styles from './search.module.css'
import { IMoviesResponse } from '../../types/movie'
import { transformResponse } from '../../helpers/transform-response'
import { NextPageContext } from 'next'

export default function Search(props: {
    movies: Array<IMoviesResponse>
}) {
    const { isHeader } = useContext(MovieContext)

    return <div className={styles.container}>
        {isHeader ? <Header /> : <MovieDetails />}

        <div className={styles.content}>
            <div className={styles['content-wrapper']}>
                <Navigation />
                <MoviesList movies={props.movies} />
            </div>
        </div>

        <Footer />
    </div>
}

export async function getServerSideProps({req, query: {
    limit = '6', sortBy = 'release_date', genre = 'all'
}}: NextPageContext) {
    const res = await (await fetch(`http://localhost:4000/movies?searchBy=title&sortBy=${sortBy}&limit=${limit}&filter=${genre === 'all' ? '' : genre}`)).json()

    return {
        props: {
            movies: transformResponse(res)
        }
    }
}
