import { useState } from 'react'
import { useModal } from '../../hooks/use-modal'
import { DeleteMovieModal } from '../DeleteMovieModal'
import { MovieAction } from '../MovieAction'
import styles from './MovieItem.module.css'

export const MovieItem = (props: {
    img: string
    title: string
    genre: string
    year: string
}) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isMovieAction, setIsMovieAction] = useState<boolean>(false)
    const {isShown, toggleShown} = useModal()

    const handleMouseOver = () => setIsHover(true)
    const handleMouseOut = () => setIsHover(false)

    const handleDeleteButtonClick = () => {
        toggleShown()
        setIsMovieAction(false)
    }

    return <>
        <li className={styles.item}>
            <button
                className={styles['image-button']}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <img
                    className={styles.image}
                    src={props.img}
                    width={323}
                    height={486}
                    alt={props.title}
                />

                {isHover && <span className={styles['movie-action']} onClick={() => setIsMovieAction(true)} />}
                {isMovieAction && <MovieAction
                    onCloseAction={() => setIsMovieAction(false)}
                    onDeleteClick={toggleShown}
                />}
            </button>

            <div className={styles['info-container']}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.year}>{props.year}</span>
            </div>

            <span className={styles.genre}>{props.genre}</span>
        </li>

        <DeleteMovieModal
            isShown={isShown}
            hide={handleDeleteButtonClick}
        />
    </>
}