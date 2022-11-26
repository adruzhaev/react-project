import cn from 'classnames'
import { MouseEvent } from 'react'
import styles from './Popover.module.css'

export const Popover = (props: {
    className?: string
    onCloseAction: () => void
    content: Array<{title: string, callback: () => void}>
}) => {
    return <div className={cn(styles.container, props.className)} onClick={(evt: MouseEvent<HTMLDivElement>) => evt.stopPropagation()}>
        <span className={styles['close-button']} onClick={props.onCloseAction} />

        <ul>
            {props.content.map((item, index) => (
                <li key={index} className={styles.item} onClick={item.callback}>
                    {item.title}
                </li>
            ))}
        </ul>
    </div>
}
