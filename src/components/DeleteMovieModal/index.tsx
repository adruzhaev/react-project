import cn from 'classnames'
import { Button } from '../Button'
import { Modal } from '../Modal'
import styles from './DeleteMovieModal.module.css'

export const DeleteMovieModal = (props: {
    className?: string
    isShown: boolean
    hide: () => void
}) => {
    const handleConfirmDeletionClick = () => {
        props.hide()
    }

    return <Modal className={cn(styles.modal, props.className)} isShown={props.isShown} title="Delete Movie" hide={props.hide}>
        <p className={styles.description}>
            Are you sure you want to delete this movie?
        </p>

        <Button
            className={styles['button-confirm']}
            onClick={handleConfirmDeletionClick}
            title="CONFIRM"
        />
    </Modal>
}
