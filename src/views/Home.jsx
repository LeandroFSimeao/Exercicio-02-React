import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList';
import { MoviesService } from '../services/MoviesService';

export function Home(){

    const [movies, setmovies] = useState([]);

    useEffect(() => {
            MoviesService.getPopularMovies().then(({ data: { results } }) => {
                setmovies(results);
            });
    },[]);


    return(
        <div className="App">
            <MoviesList movies={movies} />
        </div>
    )
}