import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import LoadingComponent from "../../../components/LoadingComponent";
import ItemList from "../../../components/ItemList";
import {getTop10Series} from "../../../store/actions";

const Top10Movies = () => {

    const dispatch = useDispatch();
    const top10Series = useSelector(state => state.top10Series);
    const top10SeriesLoading = useSelector(state => state.top10SeriesLoading);

    async function fetchTop10Series() {
        dispatch(getTop10Series());
    }

    useEffect(() => {
        (
            async () => {
                await fetchTop10Series();
            }
        )();
    }, []);

    useEffect(() => {
        console.log(top10Series);
    }, [top10SeriesLoading]);

    return (
        <div className="container">
            <h3>Series</h3>
            {top10SeriesLoading ? <LoadingComponent/> : <ItemList items={top10Series}/>}
        </div>
    );
}

export default Top10Movies;
