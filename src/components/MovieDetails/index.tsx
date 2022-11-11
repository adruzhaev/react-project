import cn from 'classnames'
import { useContext, useEffect } from 'react'
import Logo from '../../assets/logo.svg'
import SearchIcon from '../../assets/search-icon.svg'
import { MovieContext } from '../../context/movie'
import styles from './MovieDetails.module.css'

export const MovieDetails = (props: {
    className?: string
}) => {
    const { switchToHeader, movie } = useContext(MovieContext)

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [movie])

    return <div className={cn(styles.container, props.className)}>
        <div className={styles.wrapper}>

            <div className={styles.heading}>
                <Logo />

                <button className={styles['search-button']} onClick={switchToHeader}>
                    <SearchIcon />
                </button>
            </div>

            <section className={styles['movie-details']}>
                <img
                    src={movie.img}
                    width={323}
                    height={486}
                    alt={movie.title}
                />

                <div>
                    <div className={styles['movie-heading']}>
                        <h2 className={styles.title}>
                            {movie.title}
                            <span className={styles.rating}>{movie.rating}</span>
                        </h2>

                        <small className={styles.genre}>{movie.genre.join(', ')}</small>
                    </div>

                    <div className={styles['year-time-container']}>
                        <span>
                            {movie.releaseDate}
                        </span>

                        <span>
                            {movie.runTime}
                        </span>
                    </div>

                    <p className={styles.overview}>
                        {movie.overview}
                    </p>
                </div>
            </section>
        </div>
    </div>
}
