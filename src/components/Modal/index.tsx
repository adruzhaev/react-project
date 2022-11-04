import cn from 'classnames'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'

export const Modal = (props: {
    className?: string
    children: ReactNode
    isShown: boolean
    hide: () => void
    title: string
}) => {
    if (props.isShown) {
        return createPortal(
            <>
                <div className={styles.overlay} />

                <div className={styles.container}>
                    <div className={cn(styles.modal, props.className)}>
                        <button className={styles['close-button']} onClick={props.hide} />
                        <h1 className={styles.title}>{props.title}</h1>
                        {props.children}
                    </div>
                </div>
            </>,
            document.body
        )
    }

    return null
}