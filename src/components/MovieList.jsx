import Movie from "./Movie";
import {Grid} from "@mui/material";

const MovieList = ({movies}) => {
    return (
        <Grid container spacing={2} className="movie-list">
            {movies === undefined || movies.length === 0 ? (
                <div className="container">
                    <h4>No hay películas en este listado</h4>
                </div>
            ) : (
                movies.map(movie => (
                    <Grid item key={movie.id} xs={2.3}>
                        <Movie movie={movie}/>
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default MovieList;
