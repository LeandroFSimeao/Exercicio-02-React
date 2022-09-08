import { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { Movie } from "./Movie";

const elementos = [1,2,3];

export function MoviesList({movies}){
    
    return(
        <div className="container">
            {movies.map((movie) => <Movie movieId={movie.id} movieTitle={movie.title} overview={movie.overview} />)}
        </div>
    )
}