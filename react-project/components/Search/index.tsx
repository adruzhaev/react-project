import { useEffect, useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { useSearchParams, useRouter } from 'next/navigation'
import styles from './search.module.css'

export const Search = () => {
    const [value, setValue] = useState<string>('')
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const searchItem = searchParams.get('search')
        if (searchItem !== null) {
            setValue(searchItem)
        }
    }, [searchParams])

    return <div className={styles.container}>
        <Input value={value} onChange={(evt) => setValue(evt.target.value)} placeholder="What do you want to watch?" />
        <Button
            className={styles.button}
            onClick={() => router.push(`?search=${value}`)}
            // onClick={() => { searchParams.append()
            //     setSearchParams((prev) => {
            //         prev.delete('search')
            //         value && prev.append('search', value)
            //         return prev
            //     })
            // }}
            id="searchButton"
            title="SEARCH"
        />
    </div>
}
