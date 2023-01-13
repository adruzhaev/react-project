import cn from 'classnames'
import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import styles from './input.module.css'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string
    children?: ReactNode
    label?: string
    error?: string
}

export const Input = forwardRef(({className, label, children, error, ...rest}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    if (label) {
        return (
            error ?
            <div className={styles.container}>
                <div className={styles['input-container']}>
                    <label className={styles.label} htmlFor={rest.id}>{label}</label>
                    <input className={cn(styles.input, className)} ref={ref} {...rest} />
                    {children}
                </div>

                {error && <p className={styles.error}>
                    {error}
                </p>}
            </div> :
            <div className={styles['input-container']}>
                <label className={styles.label} htmlFor={rest.id}>{label}</label>
                <input className={cn(styles.input, className)} ref={ref} {...rest} />
                {children}
            </div>
        )
    }

    return (
        error ?
        <div className={styles['input-container']}>
            <input className={cn(styles.input, className)} ref={ref} {...rest} />
            <p className={styles.error}>{error}</p>
        </div> :
        <input className={cn(styles.input, className)} ref={ref} {...rest} />
    )
})
