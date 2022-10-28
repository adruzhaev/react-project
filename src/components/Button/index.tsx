import cn from 'classnames'
import { ReactNode } from 'react'
import styles from './button.module.css'

export const Button = (props: {
    className?: string
    children?: ReactNode
    title: string
}) => {
    return <button className={cn(styles.button, props.className)}>
        {props.children}
        <span>{props.title}</span>
    </button>
}