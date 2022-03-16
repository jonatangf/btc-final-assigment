import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getMoviesByOverview, getSeriesByOverview} from "../../store/actions";
import {Button, TextField} from "@mui/material";
import LoadingComponent from "../../components/LoadingComponent";
import ItemList from "../../components/ItemList";

const SearchByOverview = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.overviewMovies);
    const series = useSelector(state => state.overviewSeries);
    const moviesLoading = useSelector(state => state.overviewMoviesLoading);

    const [searchTitle, setSearchTitle] = useState('');

    async function searchByTitle() {
        dispatch(getMoviesByOverview(searchTitle));
        dispatch(getSeriesByOverview(searchTitle));
    }

    const handleOnChange = (e) => {
        setSearchTitle(e.target.value);
    };

    return (
        <div className="container">
            <h2>Busca por resumen</h2>
            <div className="row search-field">
                <div className="col-sm-3">
                    <TextField fullWidth
                               label="Título original"
                               type="search"
                               variant="filled"
                               onChange={handleOnChange}/>
                </div>
                <div className="col-sm-2">
                    <Button variant="contained"
                            color="primary"
                            onClick={searchByTitle}>Buscar</Button>
                </div>
            </div>
            <div className="row">
                <div className="container">
                    {moviesLoading ? <LoadingComponent/> :
                        <div>
                            <h3>Películas</h3>
                            <ItemList items={movies}/>
                            <h3>Series</h3>
                            <ItemList items={series}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchByOverview;
