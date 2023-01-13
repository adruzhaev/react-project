import { IMoviesResponse } from '../types/movie'
import { formatDate } from './format-date'

export const transformResponse = (serverMovies: IMoviesResponse) => {
    return ({
        totalAmount: serverMovies.totalAmount,
        data: serverMovies.data.map(item => {
            return ({
                id: item.id,
                img: item.poster_path,
                title: item.title,
                genre: item.genres,
                releaseDate: formatDate(new Date(item.release_date)),
                url: item.poster_path,
                rating: item.vote_average,
                runTime: item.runtime,
                overview: item.overview
            })
        })
    })
}
