import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { formatDate } from '../helpers/format-date'
import { IMoviesResponse, IMovieResponse } from '../types/movie'

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    tagTypes: ['Movies'],
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: (args) => {
                const {limit = 6, filter = '', sortBy = 'release_date', sortOrder} = args
                return `movies?sortBy=${sortBy}&sortOrder=${sortOrder}&limit=${limit}&searchBy=genres&filter=${filter === 'ALL' ? '' : filter}`
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
            },
            providesTags: ['Movies'],
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
        }),
        createMovie: builder.mutation({
            query: (body) => {
                return {
                    url: `movies`,
                    method: 'POST',
                    body: {
                        title: body.title,
                        vote_average: Number(body.rating),
                        release_date: formatDate(body.releaseDate, true),
                        poster_path: body.url,
                        overview: body.overview,
                        runtime: Number(body.runtime),
                        genres: body.genre.split(', ')
                    }
                }
            },
            invalidatesTags: ['Movies']
        }),
        updateMovie: builder.mutation({
            query: (body) => {
                return {
                    url: `movies`,
                    method: 'PUT',
                    body: {
                        id: body.id,
                        title: body.title,
                        vote_average: Number(body.rating),
                        release_date: formatDate(body.releaseDate, true),
                        poster_path: body.url,
                        overview: body.overview,
                        runtime: Number(body.runtime),
                        genres: body.genre.split(', ')
                    }
                }
            },
            invalidatesTags: ['Movies']
        }),
        deleteMovie: builder.mutation({
            query: (id) => {
                return {
                    url: `movies/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['Movies']
        })
    })
})

export const {
    useGetAllMoviesQuery, useGetMovieByIdQuery, useUpdateMovieMutation,
    useCreateMovieMutation, useDeleteMovieMutation,
} = moviesApi
