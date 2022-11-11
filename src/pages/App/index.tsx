import { useContext } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MovieDetails } from '../../components/MovieDetails'
import { MoviesList } from '../../components/MoviesList'
import { Navigation } from '../../components/Navigation'
import { MovieContext } from '../../context/movie'
import styles from './app.module.css'

export const App = () => {
    const { isHeader } = useContext(MovieContext)

    return <div className={styles.container}>
        {isHeader ? <Header /> : <MovieDetails />}

        <div className={styles.content}>
            <div className={styles['content-wrapper']}>
                <Navigation />
                <MoviesList />
            </div>
        </div>

        <Footer />
    </div>
}
