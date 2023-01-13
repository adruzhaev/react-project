import cn from 'classnames'
import { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/logo.svg'
import SearchIcon from '../../assets/search-icon.svg'
import { MovieContext } from '../../context/movie'
import { Loader } from '../Loader'
import styles from './MovieDetails.module.css'
import { IMovie } from '../../types/movie'
import { transformMovieResponse } from '../../helpers/transform-movie-response'
import { useRouter } from 'next/navigation'

export const MovieDetails = (props: {
    className?: string
}) => {
    const { switchToHeader, movieId } = useContext(MovieContext)
    const [movie, setMovie] = useState<IMovie>({} as IMovie);
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    const getMovieById = async () => {
        const data = await (await fetch(`http://localhost:4000/movies/${movieId}`)).json()
        setIsLoading(false)
        setMovie(transformMovieResponse(data))
    }

    useEffect(() => {        
        getMovieById()
    }, [movieId])

    return <div className={cn(styles.container, props.className)}>
        <div className={styles.wrapper}>

            <div className={styles.heading}>
                <Logo />

                <button className={styles['search-button']} onClick={() => {
                    switchToHeader()
                    router.push('')
                }}>
                    <SearchIcon />
                </button>
            </div>

            {
                isLoading && <Loader />
            }

            {
                movie && !isLoading &&
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


