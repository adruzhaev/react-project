import cn from 'classnames'
import { DetailedHTMLProps, SelectHTMLAttributes, useState } from 'react'
import { CheckBox } from '../CheckBox'
import { Input } from '../Input'
import styles from './Select.module.css'

interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    className?: string
    label?: string
    options: string[]
}

export const Select = ({className, label, options, ...rest}: SelectProps) => {
    const [isOptionsShown, setIsOptionsShown] = useState<boolean>(false)

    const showOptions = () => {
        setIsOptionsShown(!isOptionsShown)
    }

    return <div className={styles.container}>
        <Input className={className} label={label} placeholder={rest.placeholder} id={rest.id} onClick={showOptions}>
            <span className={cn(styles['triangle'], isOptionsShown && styles['triangle-up'])} />
        </Input>

        {isOptionsShown && <ul className={cn(styles.list)}>
            {options.map((item, index) => (
                <li key={index}>
                    <CheckBox id={item} label={item} />
                </li>
            ))}
        </ul>}
    </div>
}