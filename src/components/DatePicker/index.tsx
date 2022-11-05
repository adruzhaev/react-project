import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Input } from '../Input'
import Calendar from '../../assets/calendar.svg'
import styles from './DatePicker.module.css'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string
    label?: string
}

export const DatePicker = ({className, label, ...rest}: InputProps) => {
    return <div className={styles.container}>
        <Input
            className={className}
            id={rest.id}
            label={label}
            placeholder={rest.placeholder}
        >
            <span className={styles['calendar-icon']}>
                <Calendar />
            </span>
        </Input>
    </div>
}