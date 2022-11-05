import cn from 'classnames'
import { Modal } from '../Modal'
import CheckMark from '../../assets/checkmark.svg'
import styles from './AddMovieSuccessModal.module.css'

export const AddMovieSuccessModal = (props: {
    className?: string
    isShown: boolean
    hide: () => void
}) => {
    return <Modal className={cn(styles.modal, props.className)} title="congratulations!" isShown={props.isShown} hide={props.hide}>
        <span className={styles.success}>
            <CheckMark className={styles.checkmark} />
        </span>
        <p className={styles.description}>
            The movie has been added to
            database successfully
        </p>
    </Modal>
}