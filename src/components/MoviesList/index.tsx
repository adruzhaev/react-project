import { movies } from '../../data/movies'
import { MovieItem } from '../MovieItem'
import styles from './MoviesList.module.css'

export const MoviesList = () => {
    return <div className={styles.container}>
        <p className={styles['movies-count']}>
            <b>{movies.length}</b> {movies.length > 1 ? 'movies' : 'movie'} found
        </p>

        <ul className={styles.list}>
            {movies.map(item => (
                <MovieItem
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    genre={item.genre}
                    year={item.year}
                />
            ))}
        </ul>
    </div>
}