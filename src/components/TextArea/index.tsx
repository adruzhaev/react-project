import cn from 'classnames'
import { DetailedHTMLProps, ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react'
import styles from './TextArea.module.css'

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    className?: string
    label?: string
    error?: string
}

export const TextArea = forwardRef(({className, label, error, ...rest}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    if (label) {
        return <div className={cn(styles.container, className)}>
            <div className={styles['textarea-container']}>
                <label className={styles.label} htmlFor={rest.id}>{label}</label>
                <textarea className={styles.textarea} name={rest.id} ref={ref} {...rest} />
            </div>

            {error && <p className={styles.error}>
                {error}
            </p>}
        </div>
    }

    return <textarea className={styles.textarea} ref={ref} {...rest} />
})
