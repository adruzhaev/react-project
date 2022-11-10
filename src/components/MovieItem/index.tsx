import { useState } from 'react'
import { useModal } from '../../hooks/use-modal'
import { IMovie } from '../../types/movie'
import { DeleteMovieModal } from '../DeleteMovieModal'
import { MovieAction } from '../MovieAction'
import { MovieActionModal } from '../MovieActionModal'
import styles from './MovieItem.module.css'

export const MovieItem = (props: {
    movie: IMovie
}) => {
    const { img, title, genre, releaseDate } = props.movie
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
                    src={img}
                    width={323}
                    height={486}
                    alt={title}
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
                <span className={styles.title}>{title}</span>
                <span className={styles.year}>{releaseDate}</span>
            </div>

            <span className={styles.genre}>{genre.join(', ')}</span>
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
            movie={props.movie}
        />
    </>
}