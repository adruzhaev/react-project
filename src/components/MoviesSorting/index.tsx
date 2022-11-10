import styles from './MoviesSorting.module.css'

export const MoviesSorting = () => {
    return <div className={styles.container}>
        <span className={styles.sort}>Sort By</span>

        <span className={styles.release}>
            Release Date
            <span className={styles['triangle-down']} />
        </span>
    </div>
}
