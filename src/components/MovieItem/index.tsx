import { useState } from 'react'
import { useModal } from '../../hooks/use-modal'
import { DeleteMovieModal } from '../DeleteMovieModal'
import { MovieAction } from '../MovieAction'
import { MovieActionModal } from '../MovieActionModal'
import styles from './MovieItem.module.css'

export const MovieItem = (props: {
    img: string
    title: string
    genre: string
    year: string
}) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isMovieAction, setIsMovieAction] = useState<boolean>(false)
    const { isShown: isDeleteMovieModalShown, toggleShown: toggleDeleteMovieModalShown } = useModal()
    const { isShown: isEditMovieModalShown, toggleShown: toggleEditMovieModalShown } = useModal()

    const handleMouseOver = () => setIsHover(true)
    const handleMouseOut = () => setIsHover(false)

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
                    onDeleteClick={() => {
                        toggleDeleteMovieModalShown()
                        setIsMovieAction(false)
                    }}
                    onEditClick={() => {
                        toggleEditMovieModalShown()
                        setIsMovieAction(false)
                    }}
                />}
            </button>

            <div className={styles['info-container']}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.year}>{props.year}</span>
            </div>

            <span className={styles.genre}>{props.genre}</span>
        </li>

        <DeleteMovieModal
            isShown={isDeleteMovieModalShown}
            hide={toggleDeleteMovieModalShown}
        />

        <MovieActionModal
            className={styles['add-movie-modal']}
            isShown={isEditMovieModalShown}
            hide={toggleEditMovieModalShown}
            type="edit"
            onSubmitButtonClick={toggleEditMovieModalShown}
        />
    </>
}