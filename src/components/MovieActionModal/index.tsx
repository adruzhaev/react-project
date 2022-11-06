import cn from 'classnames'
import { useMemo } from 'react'
import { Button } from '../Button'
import { DatePicker } from '../DatePicker'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { Select } from '../Select'
import { TextArea } from '../TextArea'
import styles from './MovieActionModal.module.css'

const genres = ['Crime', 'Documentary', 'Horror', 'Comedy']
type actionType = 'edit' | 'add'

export const MovieActionModal = (props: {
    className?: string
    isShown: boolean
    hide: () => void
    onSubmitButtonClick: () => void
    type: actionType
}) => {
    const title = useMemo(() => {
        if (props.type === 'add') {
            return 'Add Movie'
        }

        if (props.type === 'edit') {
            return 'Edit Movie'
        }

        return 'Movie'
    }, [props.type])

    return <Modal
        className={cn(styles.modal, props.className)}
        isShown={props.isShown}
        title={title}
        hide={props.hide}
    >
        <div className={styles['inputs-container']}>
            <Input className={styles.input} id="title" label="TITLE" placeholder="Title" />
            <DatePicker className={styles.input} id="release" label="RELEASE DATE" placeholder="Select Date" />
        </div>

        <div className={styles['inputs-container']}>
            <Input className={styles.input} id="url" label="MOVIE URL" placeholder="https://" />
            <Input className={styles.input} id="rating" label="RATING" placeholder="7.8" type="number" />
        </div>

        <div className={styles['inputs-container']}>
            <Select
                className={styles.input}
                id="genre"
                options={genres}
                label="GENRE"
                placeholder="Select Genre"
            />

            <Input className={styles.input} id="runtime" label="RUNTIME" placeholder="minutes" />
        </div>

        <TextArea
            className={styles.textarea}
            id="overview"
            label="OVERVIEW"
            placeholder="Movie description"
        />

        <div className={styles['buttons-container']}>
            <Button className={cn(styles.button, styles['button-reset'])} title="reset" />
            <Button
                className={cn(styles.button, styles['button-submit'])}
                onClick={props.onSubmitButtonClick}
                title="submit"
            />
        </div>
    </Modal>
}