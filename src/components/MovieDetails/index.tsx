import Logo from '../../assets/logo.svg'
import SearchIcon from '../../assets/search-icon.svg'
import { IMovie } from '../../types/movie'
import styles from './MovieDetails.module.css'

export const MovieDetails = (props: {
    className?: string
    movie: IMovie
}) => {
    const { img, title, genre, releaseDate, rating, runTime, overview } = props.movie
    return <div className={styles.container}>
        <div className={styles.wrapper}>

            <div className={styles.heading}>
                <Logo />

                <button className={styles['search-button']}>
                    <SearchIcon />
                </button>
            </div>

            <section className={styles['movie-details']}>
                <img
                    src={img}
                    width={323}
                    height={486}
                    alt={title}
                />

                <div>
                    <div className={styles['movie-heading']}>
                        <h2 className={styles.title}>
                            {title}
                            <span className={styles.rating}>{rating}</span>
                        </h2>

                        <small className={styles.genre}>{genre.join(' ,')}</small>
                    </div>

                    <div className={styles['year-time-container']}>
                        <span>
                            {releaseDate}
                        </span>

                        <span>
                            {runTime}
                        </span>
                    </div>

                    <p className={styles.overview}>
                        {overview}
                    </p>
                </div>
            </section>
        </div>
    </div>
}
