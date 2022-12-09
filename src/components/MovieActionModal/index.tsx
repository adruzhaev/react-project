import * as yup from "yup"
import cn from 'classnames'
import { useEffect, useMemo } from 'react'
import { IMovie } from '../../types/movie'
import { Button } from '../Button'
import { DatePicker } from '../DatePicker'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { Select } from '../Select'
import { TextArea } from '../TextArea'
import { SubmitHandler, useForm } from "react-hook-form"
import { IMovieAction } from './types'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './MovieActionModal.module.css'
import { useCreateMovieMutation, useUpdateMovieMutation } from '../../services/movies'

const genres = ['Crime', 'Documentary', 'Horror', 'Comedy']
type actionType = 'edit' | 'add'

const schema = yup.object({
    title: yup.string().label("Title").required().min(2).max(30),
    releaseDate: yup.date().label("Release Date").required(),
    url: yup.string().label("Url").required().url(),
    rating: yup.lazy((value) => (value === '' ? yup.string().label("Rating").required() : yup.number().label("Rating").min(0).max(10))),
    genre: yup.string().label("Genre").required(),
    runtime: yup.string().label("Runtime").required(),
    overview: yup.string().label("Overview").required(),
})

export const MovieActionModal = (props: {
    className?: string
    isShown: boolean
    hide: () => void
    onSubmitButtonClick: () => void
    type: actionType
    movie?: IMovie
}) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<IMovieAction>({
        resolver: yupResolver(schema)
    })

    const [createMovie] = useCreateMovieMutation()
    const [updateMovie] = useUpdateMovieMutation()

    useEffect(() => {
        if (props.movie) {
            Object.entries(props.movie).forEach(
                ([name, value]) => setValue(name as keyof IMovieAction, value)
            )
        }
    }, [props.movie, setValue])

    const titleType = useMemo(() => {
        if (props.type === 'add') {
            return 'Add Movie'
        }

        if (props.type === 'edit') {
            return 'Edit Movie'
        }

        return 'Movie'
    }, [props.type])

    const onSubmit: SubmitHandler<IMovieAction> = async (data) => {
        try {
            if (props.type === 'add') {
                await createMovie(data)
            }

            if (props.type === 'edit') {
                await updateMovie(data)
            }

            props.onSubmitButtonClick()
        } catch(error) {
            console.log(error)
        }
    }

    return <Modal
        className={cn(styles.modal, props.className)}
        isShown={props.isShown}
        title={titleType}
        hide={props.hide}
    >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['inputs-container']}>
                <Input
                    className={styles.input}
                    id="title"
                    label="TITLE"
                    placeholder="Title"
                    error={errors.title?.message}
                    {...register('title')}
                />

                <DatePicker
                    className={styles.input}
                    value={props.movie?.releaseDate}
                    id="release"
                    label="RELEASE DATE"
                    placeholder="Select Date"
                    {...register('releaseDate')}
                />
            </div>

            <div className={styles['inputs-container']}>
                <Input
                    className={styles.input}
                    id="url"
                    label="MOVIE URL"
                    placeholder="https://"
                    error={errors.url?.message}
                    {...register('url')}
                />
                <Input
                    className={styles.input}
                    id="rating"
                    label="RATING"
                    placeholder="7.8"
                    type="number"
                    error={errors.rating?.message}
                    {...register('rating')}
                />
            </div>

            <div className={styles['inputs-container']}>
                <Select
                    className={styles.input}
                    value={props.movie?.genre}
                    id="genre"
                    options={genres}
                    label="GENRE"
                    placeholder="Select Genre"
                    error={errors.genre?.message}
                    {...register('genre')}
                />

                <Input
                    className={styles.input}
                    id="runtime"
                    label="RUNTIME"
                    placeholder="minutes"
                    error={errors.runtime?.message}
                    {...register('runtime')}
                />
            </div>

            <TextArea
                className={styles.textarea}
                id="overview"
                label="OVERVIEW"
                placeholder="Movie description"
                error={errors.overview?.message}
                {...register('overview')}
            />

            <div className={styles['buttons-container']}>
                <Button className={cn(styles.button, styles['button-reset'])} title="reset" />
                <Button
                    className={cn(styles.button, styles['button-submit'])}
                    title="submit"
                />
            </div>
        </form>
    </Modal>
}
