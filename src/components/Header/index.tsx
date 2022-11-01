import Logo from '../../assets/logo.svg'
import { Button } from '../Button'
import { Search } from '../Search'
import styles from './header.module.css'

export const Header = () => {
    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles['header-top']}>
                <Logo />
                <Button className={styles.button} title="Add Movie">
                    <div className={styles['button-sign']} />
                </Button>
            </div>

            <div className={styles['search-container']}>
                <h1 className={styles.title}>
                    Find your movie
                </h1>

                <Search />
            </div>
        </div>
    </div>
}