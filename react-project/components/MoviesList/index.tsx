import cn from 'classnames'
import { useState } from 'react'
import { MOVIES_LIMIT } from '../../constants/app'
import { Button } from '../Button'
import { Loader } from '../Loader'
import { MovieItem } from '../MovieItem'
import styles from './MoviesList.module.css'
import { IMovie } from '../../types/movie'
import { useRouter } from 'next/navigation'

export const MoviesList = (props: {
    movies: any
}) => {
    const [limitMovies, setLimitMovies] = useState(MOVIES_LIMIT)
    const router = useRouter()

    return <div className={cn(styles.container, styles.loader)}>
        {
            props.movies && <div className={styles['list-container']}>
                <p className={styles['movies-count']}>
                    <b>{props.movies?.totalAmount}</b> {props.movies.totalAmount > 1 ? 'movies' : 'movie'} found
                </p>

                <ul className={styles.list}>
                    {props.movies.data.map((item: IMovie) => (
                        <MovieItem
                            key={item.id}
                            movie={item}
                        />
                    ))}
                </ul>

                {props.movies.totalAmount > MOVIES_LIMIT && <Button
                    className={styles['show-more']}
                    title="Show more"
                    // onClick={() => setLimitMovies(prev => prev += MOVIES_LIMIT)}
                    onClick={() => router.push(`?limit=${props.movies.data.length += 6}`)}
                />}
            </div>
        }
    </div>
}
