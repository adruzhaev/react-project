import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MoviesList } from '../../components/MoviesList'
import { Navigation } from '../../components/Navigation'
import styles from './app.module.css'

export const App = () => {
    return <div className={styles.container}>
        <Header />

        <div className={styles.content}>
            <div className={styles['content-wrapper']}>
                <Navigation />
                <MoviesList />
            </div>
        </div>

        <Footer />
    </div>
}
