import cn from 'classnames'
import { useSearchParams } from 'react-router-dom'
import styles from './MovieGenres.module.css'

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

export const MovieGenres = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleGenreChange = (item: string) => {
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
                className={
                    cn(
                        styles.title,
                        searchParams.get('genre') ?
                        searchParams.get('genre') === item.toLowerCase() && styles['title-active'] :
                        item === 'All' && styles['title-active']
                    )
                }
                onClick={() => handleGenreChange(item)}
            >
                {item}
            </button>
        ))}
    </div>
}
