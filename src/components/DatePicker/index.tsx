import cn from 'classnames'
import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react'
import CalendarIcon from '../../assets/calendar.svg'
import Calendar from 'react-calendar'
import { useToggle } from '../../hooks/use-toggle'
import styles from './DatePicker.module.css'
import 'react-calendar/dist/Calendar.css';
import { formatDate } from '../../helpers/format-date'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string
    label?: string
    error?: string
    value?: string
}

export const DatePicker = forwardRef(({className, label, error, value, ...rest}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [isCalendar, setIsCalendar] = useToggle(false)
    const [initialValue, onChange] = useState(new Date());

    return <div className={styles.container}>
        <div className={styles.container}>
            <div className={styles['input-container']}>
                <label className={styles.label} htmlFor={rest.id}>{label}</label>
                <input
                    className={cn(styles.input, className)}
                    ref={ref}
                    onClick={setIsCalendar}
                    value={value ? formatDate(new Date(value)) : formatDate(initialValue)}
                    {...rest}
                />
                <span className={styles['calendar-icon']}>
                    <CalendarIcon />
                </span>
            </div>

            {error && <p className={styles.error}>
                {error}
            </p>}
        </div>

        {isCalendar && <Calendar
            className={styles.calendar}
            onChange={onChange}
            onClickDay={setIsCalendar}
            value={initialValue}
        />}
    </div>
})
