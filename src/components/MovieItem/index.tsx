import { MouseEvent, useContext, useState } from 'react'
import { MovieContext } from '../../context/movie'
import { useModal } from '../../hooks/use-modal'
import { IMovie } from '../../types/movie'
import { DeleteMovieModal } from '../DeleteMovieModal'
import { MovieActionModal } from '../MovieActionModal'
import { Popover } from '../Popover'
import { useSearchParams } from 'react-router-dom'
import styles from './MovieItem.module.css'

export const MovieItem = (props: {
    movie: IMovie
}) => {
    const { id, img, title, genre, releaseDate } = props.movie
    const { switchToMovieDetails } = useContext(MovieContext)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isMovieAction, setIsMovieAction] = useState<boolean>(false)
    const [_searchParams, setSearchParams] = useSearchParams()
    const { isShown: isDeleteMovieModalShown, toggleShown: toggleDeleteMovieModalShown } = useModal()
    const { isShown: isEditMovieModalShown, toggleShown: toggleEditMovieModalShown } = useModal()

    const handleMouseOver = () => setIsHover(true)
    const handleMouseOut = () => setIsHover(false)

    const handleEditButtonClick = () => {
        toggleEditMovieModalShown()
        setIsMovieAction(false)
    }

    const handleDeleteButtonClick = () => {
        toggleDeleteMovieModalShown()
        setIsMovieAction(false)
    }

    return <>
        <li className={styles.item}>
            <button
                id={title}
                className={styles['image-button']}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={() => {
                    setSearchParams({ movie: id.toString() })
                    switchToMovieDetails(id)
                }}
            >
                <img
                    className={styles.image}
                    src={img}
                    width={323}
                    height={486}
                    alt={title}
                />

                {isHover && <span
                    className={styles['movie-action']}
                    onClick={(evt: MouseEvent<HTMLSpanElement>) => {
                        evt.stopPropagation()
                        setIsMovieAction(true)
                    }}
                />}

                {isMovieAction && <Popover
                    onCloseAction={() => setIsMovieAction(false)}
                    content={[
                        {title: 'Edit', callback: handleEditButtonClick},
                        {title: 'Delete', callback: handleDeleteButtonClick}
                    ]}
                />}

            </button>

            <div className={styles['info-container']}>
                <span className={styles.title}>{title}</span>
                <span className={styles.year}>{releaseDate}</span>
            </div>

            <span className={styles.genre}>{genre.join(', ')}</span>
        </li>

        <DeleteMovieModal
            id={id}
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
