import styles from './MovieAction.module.css'

export const MovieAction = (props: {
    className?: string
    onCloseAction: () => void
    onDeleteClick: () => void
    onEditClick: () => void
}) => {
    return <div className={styles.container}>
        <span className={styles['close-button']} onClick={props.onCloseAction} />

        <ul>
            <li className={styles.item} onClick={props.onEditClick}>
                Edit
            </li>
            <li className={styles.item} onClick={props.onDeleteClick}>
                Delete
            </li>
        </ul>
    </div>
}
