import { IResultsProps } from 'interfaces/Pages/home'
import React from 'react'
import { MoviesBox } from './style'

interface IMovies {
    item: IResultsProps
}

export default function Movies({item}: IMovies) {
    return (
        <MoviesBox>
            <img src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} alt={item.backdrop_path} />
        </MoviesBox>
    )
}
