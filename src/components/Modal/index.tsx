import cn from 'classnames'
import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'

export const Modal = (props: {
    className?: string
    children: ReactNode
    isShown: boolean
    hide: () => void
    title: string
}) => {
    useEffect(() => {
        if (props.isShown) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [props.isShown])

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