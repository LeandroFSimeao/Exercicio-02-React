import {Link} from "react-router-dom";

export function Movie({movieId, movieTitle, overview}){
    return(
        <div className="movie">
            <h3>
                <Link to={`/movie/${movieId}`}>{movieTitle}</Link>
            </h3>
            <p className="movie-overview">{overview}</p>
        </div>
    )
}