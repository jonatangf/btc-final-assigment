import Movie from "./Movie";

const MovieList = ({movies}) => {
    return (
        <div className="row movie-list">
            {movies === undefined || movies.length === 0 ? (
                <div className="movie-list__empty">
                    <h2>No movies found</h2>
                </div>
            ) : (
                movies.map(movie => (
                    <div className="col-sm-4">
                        <Movie key={movie.id} movie={movie}/>
                    </div>
                ))
            )}
        </div>
    );
};

export default MovieList;
