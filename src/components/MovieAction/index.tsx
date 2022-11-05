import styles from './MovieAction.module.css'

const actions = ['Edit', 'Delete']

export const MovieAction = (props: {
    className?: string
    onCloseAction: () => void
}) => {
    return <div className={styles.container}>
        <span className={styles['close-button']} onClick={props.onCloseAction} />

        <ul>
            {actions.map(item => (
                <li key={item} className={styles.item}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
}