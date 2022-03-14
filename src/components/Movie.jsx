import {Card} from "@mui/material";

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face/';

const Movie = ({movie}) => {
    return (
        <Card className="movie">
            <div>
                <img src={BASE_IMAGE_URL + movie.poster_path} alt={movie.title}/>
            </div>
            <div>{movie.title}</div>
        </Card>
    );
}

export default Movie;
