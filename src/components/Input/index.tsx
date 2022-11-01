import cn from 'classnames'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from './input.module.css'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string
    label?: string
}

export const Input = ({className, label, ...rest}: InputProps) => {
    return <>
        {label && <label>{label}</label>}
        <input className={cn(styles.input, className)} {...rest} />
    </>
}