import { Button } from '../Button'
import { Input } from '../Input'
import { useSearchParams } from 'react-router-dom'
import styles from './search.module.css'
import { useState } from 'react'

export const Search = () => {
    const [value, setValue] = useState<string>('')
    const [_, setSearchParams] = useSearchParams()

    return <div className={styles.container}>
        <Input value={value} onChange={(evt) => setValue(evt.target.value)} placeholder="What do you want to watch?" />
        <Button
            className={styles.button}
            onClick={() => {
                setSearchParams((prev) => {
                    prev.delete('search')
                    value && prev.append('search', value)
                    return prev
                })
            }}
            title="SEARCH"
        />
    </div>
}
