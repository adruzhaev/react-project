import cn from 'classnames'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from './CheckBox.module.css'

interface CheckBoxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string
    containerClassName?: string
    label?: string
    isChecked: boolean
}

export const CheckBox = ({className, containerClassName, label, isChecked, ...rest}: CheckBoxProps) => {
    return <div className={cn(containerClassName, styles.container)}>
        <input
            className={cn(styles.input ,className)}
            checked={isChecked}
            type="checkbox"
            {...rest}
        />
        <label className={styles.label} htmlFor={rest.id}>{label}</label>
    </div>
}
