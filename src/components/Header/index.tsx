import Logo from '../../assets/logo.svg'
import { useModal } from '../../hooks/use-modal'
import { AddMovieModal } from '../AddMovieModal'
import { Button } from '../Button'
import { Search } from '../Search'
import styles from './header.module.css'

export const Header = () => {
    const { isShown, toggleShown } = useModal()

    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles['header-top']}>
                <Logo />
                <Button className={styles.button} onClick={() => toggleShown()} title="Add Movie">
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

        <AddMovieModal
            className={styles['add-movie-modal']}
            isShown={isShown}
            hide={toggleShown}
        />
    </div>
}