import cn from 'classnames'
import { ReactNode } from 'react'
import styles from './button.module.css'

export const Button = (props: {
    className?: string
    children?: ReactNode
    id?: string
    title: string
    onClick?: () => void
}) => {
    return <button className={cn(styles.button, props.className)} onClick={props.onClick} id={props.id}>
        {props.children}
        <span>{props.title}</span>
    </button>
}
