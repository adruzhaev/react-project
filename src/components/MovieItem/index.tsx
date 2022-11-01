import { useState } from 'react'
import styles from './MovieItem.module.css'

export const MovieItem = (props: {
    img: string
    title: string
    genre: string
    year: string
}) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const handleMouseOver = () => setIsHover(true)
    const handleMouseOut = () => setIsHover(false)

    return <li className={styles.item}>
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

            {isHover && <button className={styles['movie-action']} />}
        </button>

        <div className={styles['info-container']}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.year}>{props.year}</span>
        </div>

        <span className={styles.genre}>{props.genre}</span>
    </li>
}