import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMoviesResponse, IMovieResponse } from '../types/movie'

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: (args) => {
                const {limit = 6, filter = '', sortBy = 'release_date'} = args
                return `movies?sortBy=${sortBy}&sortOrder=desc&limit=${limit}&searchBy=genres&filter=${filter === 'ALL' ? '' : filter}`
            },
            transformResponse: (baseQueryReturnValue: IMoviesResponse) => {
                return ({
                    totalAmount: baseQueryReturnValue.totalAmount,
                    data: baseQueryReturnValue.data.map(item => {
                        return ({
                            id: item.id,
                            img: item.poster_path,
                            title: item.title,
                            genre: item.genres,
                            releaseDate: item.release_date,
                            url: item.poster_path,
                            rating: item.vote_average,
                            runTime: item.runtime,
                            overview: item.overview
                        })
                    })
                })
            }
        }),
        getMovieById: builder.query({
            query: (id) => `movies/${id}`,
            transformResponse: (baseQueryReturnValue: IMovieResponse) => {
                return ({
                    id: baseQueryReturnValue.id,
                    img: baseQueryReturnValue.poster_path,
                    title: baseQueryReturnValue.title,
                    genre: baseQueryReturnValue.genres,
                    releaseDate: baseQueryReturnValue.release_date,
                    url: baseQueryReturnValue.poster_path,
                    rating: baseQueryReturnValue.vote_average,
                    runTime: baseQueryReturnValue.runtime,
                    overview: baseQueryReturnValue.overview
                })
            }
        })
    })
})

export const { useGetAllMoviesQuery, useGetMovieByIdQuery } = moviesApi
