import { Button } from '../Button'
import { Input } from '../Input'
import styles from './search.module.css'

export const Search = () => {
    return <div className={styles.container}>
        <Input placeholder="What do you want to watch?" />
        <Button className={styles.button} title="SEARCH" />
    </div>
}