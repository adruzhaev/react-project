import { useDispatch, useSelector } from 'react-redux';
import { useToggle } from '../../hooks/use-toggle'
import { getSortingType } from '../../store/filters/selectors';
import { changeSortingType } from '../../store/filters/slice';
import { Popover } from '../Popover'
import styles from './MoviesSorting.module.css'

export const MoviesSorting = () => {
    const sortingType = useSelector(getSortingType)
    const dispatch = useDispatch()

    const handleGenreChange = (item: string) => {
        dispatch(changeSortingType(item))
    }
    const [isSortTypePopover, setIsSortTypePopover] = useToggle(false)

    return <div className={styles.container}>
        <span className={styles.sort}>Sort By</span>

        <span className={styles['sort-type']}>
            <button
                className={styles['sort-button']}
                onClick={setIsSortTypePopover}
            >
                {sortingType}
            </button>
            <span className={styles['triangle-down']} />
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
