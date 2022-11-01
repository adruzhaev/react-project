import cn from 'classnames'
import styles from './MovieGenres.module.css'

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

export const MovieGenres = () => {
    return <div className={styles.container}>
        {genres.map((item, index) => (
            <button key={item} className={cn(styles.title, index === 0 && styles['title-active'])}>{item}</button>
        ))}
    </div>
}