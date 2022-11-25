export interface IMovie {
    id: number
    img: string
    title: string
    genre: Array<string>
    releaseDate: string
    url: string
    rating: number
    runTime: number
    overview: string
}

interface IMovieResponse {
    id: number
    title: string
    tagline:	string
    vote_average: number
    vote_count: number
    release_date: string
    poster_path: string
    overview: string
    budget: number
    revenue: number
    runtime: number
    genres: Array<string>
}

export interface IMoviesResponse {
    totalAmount: number
    offset: number
    limit: number
    data: Array<IMovieResponse>
}
