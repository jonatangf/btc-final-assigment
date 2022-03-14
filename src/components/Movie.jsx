import {Card} from "@mui/material";

const Movie = ({movie}) => {
    return (
        <Card className="movie">
            <div>{movie.title}</div>
        </Card>
    );
}

export default Movie;
