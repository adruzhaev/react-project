import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { useToggle } from '../../hooks/use-toggle'
import { getSortingType } from '../../store/filters/selectors';
import { changeSortingOrder, changeSortingType } from '../../store/filters/slice';
import { Popover } from '../Popover'
import styles from './MoviesSorting.module.css'

export const MoviesSorting = () => {
    const [isSortTypePopover, setIsSortTypePopover] = useToggle(false)
    const [isSortOrderDesc, setIsSortOrderDesc] = useToggle(false)
    const sortingType = useSelector(getSortingType)
    const dispatch = useDispatch()

    const handleGenreChange = (item: string) => {
        dispatch(changeSortingType(item))
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
                {sortingType}
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
