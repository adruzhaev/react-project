import cn from 'classnames'
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import styles from './input.module.css'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string
    children?: ReactNode
    label?: string
}

export const Input = ({className, label, children, ...rest}: InputProps) => {
    if (label) {
        return <div className={styles.container}>
            <label className={styles.label} htmlFor={rest.id}>{label}</label>
            <input className={cn(styles.input, className)} {...rest} />
            {children}
        </div>
    }

    return <input className={cn(styles.input, className)} {...rest} />
}
