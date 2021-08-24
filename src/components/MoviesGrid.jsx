import { MovieCard } from './MovieCard'
import movies from './movies.json'
import styles from './MoviesGrid.module.css'
import { useState,useEffect } from 'react'
import { get } from '../utils/httpClient'
import { useQuery } from '../hooks/useQuery'



export function MoviesGrid(){
    //let movies=[]
    const[movies, setMovies]=useState([])

    const query = useQuery()
    const search = query.get("search")

    useEffect(function(){

        const searchUrl = search 
        ? "/search/movie?query=" + search 
        : "/discover/movie"

       get(searchUrl).then((data) => {
              setMovies(data.results)
              
          })
    },[search])

    return(
        <ul className={styles.moviesGrid}>
            {movies.map(function(movie){
                return <MovieCard key={movie.id} movie={movie} />
            })}
        </ul>
    )
}