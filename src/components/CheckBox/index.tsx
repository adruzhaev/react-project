import cn from 'classnames'
import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import styles from './CheckBox.module.css'

interface CheckBoxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string
    containerClassName?: string
    label?: string
}

export const CheckBox = ({className, containerClassName, label, ...rest}: CheckBoxProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return <div className={cn(containerClassName, styles.container)}>
        <input
            className={cn(styles.input ,className)}
            onChange={() => setIsChecked((prev) => !prev)}
            checked={isChecked}
            type="checkbox"
            {...rest}
        />
        <label className={styles.label} htmlFor={rest.id}>{label}</label>
    </div>
}