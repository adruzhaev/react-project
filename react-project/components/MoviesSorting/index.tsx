import cn from 'classnames'
import { useToggle } from '../../hooks/use-toggle'
import { Popover } from '../Popover'
import styles from './MoviesSorting.module.css'
import { useSearchParams } from 'next/navigation'

export const MoviesSorting = () => {
    const [isSortTypePopover, setIsSortTypePopover] = useToggle(false)
    const [isSortOrderDesc, setIsSortOrderDesc] = useToggle(false)
    const searchParams = useSearchParams()

    const handleGenreChange = (item: string) => {
    }

    const handleSortingOrderChange = () => {
        setIsSortOrderDesc()
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
