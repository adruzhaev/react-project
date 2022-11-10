import PulpFiction from '../assets/movies/PulpFiction.jpg'
import BohemianRhapsody from '../assets/movies/BohemianRhapsody.jpg'
import KillBillVol2 from '../assets/movies/KillBillVol2.jpg'
import Avengers from '../assets/movies/Avengers.jpg'
import Inception from '../assets/movies/Inception.jpg'
import ReservoirDogs from '../assets/movies/ReservoirDogs.jpg'
import { IMovie } from '../types/movie'

export const movies: Array<IMovie> = [
    {
        id: 1,
        img: PulpFiction,
        title: 'Pulp Fiction',
        genre: ['Action & Adventure'],
        releaseDate: '2004',
        url: 'www.example.com',
        rating: 7.8,
        runTime: 120,
        overview: 'Very good'
    },
    {
        id: 2,
        img: BohemianRhapsody,
        title: 'Bohemian Rhapsody',
        genre: ['Drama', 'Biography', 'Music'],
        releaseDate: '2003',
        url: 'www.example.com',
        rating: 7.8,
        runTime: 120,
        overview: 'Very good'
    },
    {
        id: 3,
        img: KillBillVol2,
        title: 'Kill Bill: Vol 2',
        genre: ['Oscar winning Movie'],
        releaseDate: '1994',
        url: 'www.example.com',
        rating: 7.8,
        runTime: 120,
        overview: 'Very good'
    },
    {
        id: 4,
        img: Avengers,
        title: 'Avengers: War of Infinity',
        genre: ['Action & Adventure'],
        releaseDate: '2004',
        url: 'www.example.com',
        rating: 7.8,
        runTime: 120,
        overview: 'Very good'
    },
    {
        id: 5,
        img: Inception,
        title: 'Inception',
        genre: ['Drama', 'Biography', 'Music'],
        releaseDate: '2003',
        url: 'www.example.com',
        rating: 7.8,
        runTime: 120,
        overview: 'Very good'
    },
    {
        id: 6,
        img: ReservoirDogs,
        title: 'Reservoir dogs',
        genre: ['Oscar winning Movie'],
        releaseDate: '1994',
        url: 'www.example.com',
        rating: 7.8,
        runTime: 120,
        overview: 'Very good'
    },
]
