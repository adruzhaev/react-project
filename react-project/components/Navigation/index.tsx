import { MovieGenres } from '../MovieGenres'
import { MoviesSorting } from '../MoviesSorting'
import styles from './Navigation.module.css'

export const Navigation = () => {
    return <div className={styles.container}>
        <MovieGenres />
        <MoviesSorting />
    </div>
}
