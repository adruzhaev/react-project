import cn from 'classnames'
import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react'
import { CheckBox } from '../CheckBox'
import styles from './Select.module.css'

interface SelectProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string
    label?: string
    options: string[]
    error?: string
    value?: string[]
}

export const Select = forwardRef(({className, label, options, error, value, ...rest}: SelectProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [isOptionsShown, setIsOptionsShown] = useState<boolean>(false)
    const [inputValue, setValue] = useState(value ? value : [])

    const showOptions = () => {
        setIsOptionsShown(!isOptionsShown)
    }

    return <div className={styles.container}>
        <div className={styles['input-container']}>
            <label className={styles.label} htmlFor={rest.id}>{label}</label>
            <input
                className={cn(styles.input, className)}
                ref={ref}
                onClick={showOptions}
                value={inputValue ? inputValue.join(', ') : ''}
                {...rest}
            />

            <span className={cn(styles['triangle'], isOptionsShown && styles['triangle-up'])} />
        </div>

        {error && <p className={styles.error}>
            {error}
        </p>}

        {isOptionsShown && <ul className={cn(styles.list)}>
            {options.map((item, index) => (
                <li key={index}>
                    <CheckBox
                        id={item}
                        label={item}
                        isChecked={inputValue.includes(item)}
                        onChange={(evt) => {
                            evt.target.checked ?
                            setValue(prev => [...prev, item]) :
                            setValue(prev => {
                                return prev?.filter(t => t !== item)
                            })
                        }}
                    />
                </li>
            ))}
        </ul>}
    </div>
})
