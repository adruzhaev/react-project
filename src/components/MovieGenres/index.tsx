import cn from 'classnames'
import { getGenre } from '../../store/filters/selectors'
import { useDispatch, useSelector } from 'react-redux';
import styles from './MovieGenres.module.css'
import { changeGenre } from '../../store/filters/slice';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

export const MovieGenres = () => {
    const chosenGenre = useSelector(getGenre)
    const dispatch = useDispatch()

    const handleGenreChange = (item: string) => {
        dispatch(changeGenre(item))
    }

    return <div className={styles.container}>
        {genres.map((item) => (
            <button
                key={item}
                className={cn(styles.title, chosenGenre === item && styles['title-active'])}
                onClick={() => handleGenreChange(item)}
            >
                {item}
            </button>
        ))}
    </div>
}
