import cn from 'classnames'
import { Button } from '../Button'
import { DatePicker } from '../DatePicker'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { Select } from '../Select'
import { TextArea } from '../TextArea'
import styles from './AddMovieModal.module.css'

const genres = ['Crime', 'Documentary', 'Horror', 'Comedy']

export const AddMovieModal = (props: {
    className?: string
    isShown: boolean
    hide: () => void
}) => {
    return <Modal className={props.className} isShown={props.isShown} title="Add Movie" hide={props.hide}>
        <div className={styles['inputs-container']}>
            <Input className={styles.input} id="title" label="TITLE" placeholder="Title" />

            <DatePicker className={styles.input} id="release" label="RELEASE DATE" placeholder="Select Date" />
            {/* <Input className={styles.input} id="release" label="RELEASE DATE" placeholder="Select Date" /> */}
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
            <Button className={cn(styles.button, styles['button-submit'])} title="submit" />
        </div>
    </Modal>
}