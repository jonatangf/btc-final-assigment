const Movie = ({movie}) => {
    return (
        <div className="movie">
            <img src={movie.poster} alt={movie.title}/>
        </div>
    );
}

export default Movie;
