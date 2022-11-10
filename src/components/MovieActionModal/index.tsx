import cn from 'classnames'
import { useMemo } from 'react'
import { IMovie } from '../../types/movie'
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
    movie?: IMovie
}) => {
    const titleType = useMemo(() => {
        if (props.type === 'add') {
            return 'Add Movie'
        }

        if (props.type === 'edit') {
            return 'Edit Movie'
        }

        return 'Movie'
    }, [props.type])

    // There are no handlers for changing values now as I will use Formik for form later
    return <Modal
        className={cn(styles.modal, props.className)}
        isShown={props.isShown}
        title={titleType}
        hide={props.hide}
    >
        <div className={styles['inputs-container']}>
            <Input
                className={styles.input}
                value={props.movie ? props.movie.title : ''}
                id="title"
                label="TITLE"
                placeholder="Title"
            />
            <DatePicker
                className={styles.input}
                value={props.movie ? props.movie.releaseDate : ''}
                id="release"
                label="RELEASE DATE"
                placeholder="Select Date"
            />
        </div>

        <div className={styles['inputs-container']}>
            <Input
                className={styles.input}
                value={props.movie ? props.movie.url : ''}
                id="url"
                label="MOVIE URL"
                placeholder="https://"
            />
            <Input
                className={styles.input}
                value={props.movie ? props.movie.rating : ''}
                id="rating"
                label="RATING"
                placeholder="7.8" type="number"
            />
        </div>

        <div className={styles['inputs-container']}>
            <Select
                className={styles.input}
                value={props.movie ? props.movie.genre.join(', ') : ''}
                id="genre"
                options={genres}
                label="GENRE"
                placeholder="Select Genre"
            />

            <Input
                className={styles.input}
                value={props.movie ? props.movie.runTime : ''}
                id="runtime"
                label="RUNTIME"
                placeholder="minutes"
            />
        </div>

        <TextArea
            className={styles.textarea}
            value={props.movie ? props.movie.overview : ''}
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
