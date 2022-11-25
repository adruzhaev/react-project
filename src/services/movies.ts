import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMoviesResponse } from '../types/movie'

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: (limit = 6) => `movies?limit=${limit}`,
            transformResponse: (baseQueryReturnValue: IMoviesResponse) => {
                console.log('baseQueryReturnValue:' ,baseQueryReturnValue)
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
    })
})

export const { useGetAllMoviesQuery } = moviesApi
