import Movie from "./Movie";

const MovieList = ({movies}) => {
    return (
        <div className="row movie-list">
            {movies === undefined || movies.length === 0 ? (
                <div className="container">
                    <h4>No hay películas en este listado</h4>
                </div>
            ) : (
                movies.map(movie => (
                    <div className="col-sm-3" key={movie.id}>
                        <Movie movie={movie}/>
                    </div>
                ))
            )}
        </div>
    );
};

export default MovieList;
