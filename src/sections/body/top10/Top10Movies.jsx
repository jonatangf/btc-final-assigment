import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTop10Movies} from "../../../store/actions";
import LoadingComponent from "../../../components/LoadingComponent";
import ItemList from "../../../components/ItemList";

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

    return (
        <div className="container">
            <h3>Películas</h3>
            {top10MoviesLoading ? <LoadingComponent/> : <ItemList items={top10Movies}/>}
        </div>
    );
}

export default Top10Movies;
