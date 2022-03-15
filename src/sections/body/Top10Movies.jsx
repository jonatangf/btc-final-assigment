import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTop10Movies} from "../../store/actions";
import LoadingComponent from "../../components/LoadingComponent";
import MovieList from "../../components/MovieList";

const Top10Movies = () => {

    const dispatch = useDispatch();
    const top10Movies = useSelector(state => state.top10Movies);
    const top10MoviesLoading = useSelector(state => state.top10MoviesLoading);

    async function fetchTop10Movies() {
        dispatch(getTop10Movies());
    }

    useEffect(() => {
        (async () => {
                await fetchTop10Movies();
            }
        )();
    }, []);

    useEffect(() => {
        console.log(top10Movies);
    }, [top10MoviesLoading]);

    return (
        <div className="container">
            {top10MoviesLoading ? <LoadingComponent/> : <MovieList movies={top10Movies}/>}
        </div>
    );
}

export default Top10Movies;
