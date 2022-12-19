import cn from 'classnames'
import { useDispatch } from 'react-redux';
import { changeGenre } from '../../store/filters/slice';
import { useSearchParams } from 'react-router-dom'
import styles from './MovieGenres.module.css'

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

export const MovieGenres = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    const handleGenreChange = (item: string) => {
        dispatch(changeGenre(item))
        setSearchParams((prev) => {
            prev.delete('genre')
            prev.append('genre', item.toLowerCase())
            return prev
        })
    }

    return <div className={styles.container}>
        {genres.map((item) => (
            <button
                key={item}
                className={cn(styles.title, searchParams.get('genre') === item.toLowerCase() && styles['title-active'])}
                onClick={() => handleGenreChange(item)}
            >
                {item}
            </button>
        ))}
    </div>
}
