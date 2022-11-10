import cn from 'classnames'
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import styles from './TextArea.module.css'

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    className?: string
    label?: string
}

export const TextArea = ({className, label, ...rest}: TextAreaProps) => {
    if (label) {
        return <div className={styles.container}>
            <label className={styles.label} htmlFor={rest.id}>{label}</label>
            <textarea className={cn(styles.textarea, className)} name={rest.id} {...rest} />
        </div>
    }

    return <textarea className={styles.textarea} {...rest} />
}
