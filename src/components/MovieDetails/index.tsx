import cn from 'classnames'
import { useContext, useEffect } from 'react'
import Logo from '../../assets/logo.svg'
import SearchIcon from '../../assets/search-icon.svg'
import { MovieContext } from '../../context/movie'
import { useGetMovieByIdQuery } from '../../services/movies'
import { Loader } from '../Loader'
import { useSearchParams } from 'react-router-dom'
import styles from './MovieDetails.module.css'

export const MovieDetails = (props: {
    className?: string
}) => {
    const { switchToHeader, movieId } = useContext(MovieContext)
    const { data: movie, isLoading, isFetching } = useGetMovieByIdQuery(movieId)
    const [_searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [movie, isFetching])

    return <div className={cn(styles.container, props.className)}>
        <div className={styles.wrapper}>

            <div className={styles.heading}>
                <Logo />

                <button className={styles['search-button']} onClick={() => {
                    switchToHeader()
                    setSearchParams(prev => {
                        prev.delete('movie')
                        return prev
                    })
                }}>
                    <SearchIcon />
                </button>
            </div>

            {
                (isLoading || isFetching) && <Loader />
            }

            {
                movie && !isFetching &&
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
            }
        </div>
    </div>
}
