import cn from 'classnames'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './MovieGenres.module.css'

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

export const MovieGenres = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleGenreChange = (item: string) => {
        router.push(`?genre=${item.toLowerCase()}`)
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
