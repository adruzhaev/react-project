import styles from './MovieAction.module.css'

export const MovieAction = (props: {
    className?: string
    onCloseAction: () => void
    onDeleteClick: () => void
}) => {
    return <div className={styles.container}>
        <span className={styles['close-button']} onClick={props.onCloseAction} />

        <ul>
            <li className={styles.item}>
                Edit
            </li>
            <li className={styles.item} onClick={props.onDeleteClick}>
                Delete
            </li>
        </ul>
    </div>
}