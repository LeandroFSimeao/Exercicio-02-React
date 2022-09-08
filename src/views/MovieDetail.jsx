import { useEffect, useState } from "react";
import { MoviesService } from '../services/MoviesService';
import {useParams} from 'react-router-dom';

export function MovieDetail(){
    const[movie, setMovie] = useState({});
    const {movieId} = useParams();

    useEffect(() => {
            MoviesService.getById(movieId).then(({ data }) => {
                setMovie(data);
            });
    },[]);

    return(
        <section>
            <h1>{movie.title}</h1>
            <section>
                <p>
                {movie.overview}
                </p>
            </section>
        </section> 
        
    )
}