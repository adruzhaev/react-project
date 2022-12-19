import cn from 'classnames'
import { useDispatch } from 'react-redux';
import { useToggle } from '../../hooks/use-toggle'
import { changeSortingOrder, changeSortingType } from '../../store/filters/slice';
import { Popover } from '../Popover'
import styles from './MoviesSorting.module.css'
import { useSearchParams } from 'react-router-dom'

export const MoviesSorting = () => {
    const [isSortTypePopover, setIsSortTypePopover] = useToggle(false)
    const [isSortOrderDesc, setIsSortOrderDesc] = useToggle(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()

    const handleGenreChange = (item: string) => {
        dispatch(changeSortingType(item))
        setSearchParams((prev) => {
            prev.delete('sortBy')
            prev.append('sortBy', item)
            return prev
        })
    }

    const handleSortingOrderChange = () => {
        setIsSortOrderDesc()
        !isSortOrderDesc ? dispatch(changeSortingOrder('asc')) : dispatch(changeSortingOrder('desc'))
    }

    return <div className={styles.container}>
        <span className={styles.sort}>Sort By</span>

        <span className={styles['sort-type']}>
            <button
                className={styles['sort-button']}
                onClick={setIsSortTypePopover}
            >
                {searchParams.get('sortBy') !== null ? searchParams.get('sortBy') : 'RELEASE DATE'}
            </button>

            <button
                className={styles['triangle-button']}
                onClick={handleSortingOrderChange}
            >
                <span className={cn(styles['triangle-down'], isSortOrderDesc && styles['triangle-up'])} />
            </button>
        </span>

        {
            isSortTypePopover && <Popover
                className={styles.popover}
                onCloseAction={setIsSortTypePopover}
                content={[
                    {title: 'Rating', callback: () => {
                        handleGenreChange('Rating')
                        setIsSortTypePopover()
                    }},
                    {title: 'Release Date', callback: () => {
                        handleGenreChange('Release Date')
                        setIsSortTypePopover()
                    }},
                ]}
            />

        }
    </div>
}
