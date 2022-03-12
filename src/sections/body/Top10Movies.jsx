import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/actions";

const Top10Movies = () => {

    const dispatch = useDispatch();
    const top10Movies = useSelector(state => state.top10Movies);
    const top10MoviesLoading = useSelector(state => state.top10MoviesLoading);

    useEffect(() => {
        dispatch({type: actions.GET_TOP_10_MOVIES});
    }, []);

    return (
        <div>
            {top10Movies === undefined ?
                <div>No existen películas</div> :
                <div>
                    {
                        top10MoviesLoading ?
                            <div>Loading...</div>
                            :
                            <div>
                                {
                                    top10Movies.map(m => (
                                        <div key={m.id}>
                                            <img src={m.poster} alt={m.title}/>
                                            <div>{m.title}</div>
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
            }
        </div>
    );
}

export default Top10Movies;
