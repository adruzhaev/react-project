import cn from 'classnames'
import { useState } from 'react'
import { MOVIES_LIMIT } from '../../constants/app'
import { useGetAllMoviesQuery } from '../../services/movies'
import { Button } from '../Button'
import { Loader } from '../Loader'
import { MovieItem } from '../MovieItem'
import { useSelector } from 'react-redux'
import { getSortingOrder, getSortingType } from '../../store/filters/selectors'
import { convertSortType } from '../../helpers/convert-sort-type'
import { useSearchParams } from 'react-router-dom'
import styles from './MoviesList.module.css'

export const MoviesList = () => {
    const [limitMovies, setLimitMovies] = useState(MOVIES_LIMIT)
    const sortType = useSelector(getSortingType)
    const sortOrder = useSelector(getSortingOrder)
    const [searchParams] = useSearchParams()

    const { data: movies, error, isLoading } = useGetAllMoviesQuery({
        sortBy: convertSortType(sortType),
        sortOrder: sortOrder,
        limit: limitMovies,
        filter: searchParams.get('genre') ?? 'all',
        search: searchParams.get('search') ?? '',
    })

    return <div className={cn(styles.container, styles.loader)}>
        {
            isLoading && <Loader />
        }

        {
            error && <p>
                Loading error is ocurred.
            </p>
        }

        {
            !isLoading && movies && <div className={styles['list-container']}>
                <p className={styles['movies-count']}>
                    <b>{movies?.totalAmount}</b> {movies.totalAmount > 1 ? 'movies' : 'movie'} found
                </p>

                <ul className={styles.list}>
                    {movies.data.map(item => (
                        <MovieItem
                            key={item.id}
                            movie={item}
                        />
                    ))}
                </ul>

                {movies.totalAmount > limitMovies && <Button
                    className={styles['show-more']}
                    title="Show more"
                    onClick={() => setLimitMovies(prev => prev += MOVIES_LIMIT)}
                />}
            </div>
        }
    </div>
}
