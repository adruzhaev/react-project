import { IMovieResponse } from '../types/movie'
import { formatDate } from './format-date'

export const transformMovieResponse = (movie: IMovieResponse) => {
    return ({
        id: movie.id,
        img: movie.poster_path,
        title: movie.title,
        genre: movie.genres,
        releaseDate: formatDate(new Date(movie.release_date)),
        url: movie.poster_path,
        rating: movie.vote_average,
        runTime: movie.runtime,
        overview: movie.overview
    })
}


