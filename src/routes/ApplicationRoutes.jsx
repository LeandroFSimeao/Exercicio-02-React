import { Routes, Route } from "react-router-dom";
import {Home} from "../views/Home";
import { MovieDetail } from "../views/MovieDetail";

export function ApplicationRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
    )
}