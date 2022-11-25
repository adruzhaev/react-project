import cn from 'classnames'
import styles from './Loader.module.css'

export const Loader = (props: {
    className?: string
}) => {
    return <div className={cn(styles.container, props.className)}>
        <div className={cn(styles.dot, styles.dot1)} />
        <div className={cn(styles.dot, styles.dot2)} />
        <div className={cn(styles.dot, styles.dot3)} />
    </div>
}
