import { useContext } from 'react'
import { MovieContext } from '../../context/movie'
import { MovieItem } from '../MovieItem'
import styles from './MoviesList.module.css'

export const MoviesList = () => {
    const { movies } = useContext(MovieContext)

    return <div className={styles.container}>
        <p className={styles['movies-count']}>
            <b>{movies.length}</b> {movies.length > 1 ? 'movies' : 'movie'} found
        </p>

        <ul className={styles.list}>
            {movies.map(item => (
                <MovieItem
                    key={item.id}
                    movie={item}
                />
            ))}
        </ul>
    </div>
}
