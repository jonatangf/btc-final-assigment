import {Button, TextField} from "@mui/material";
import {getMoviesBySpanishTitle, getSeriesBySpanishTitle} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import LoadingComponent from "../../components/LoadingComponent";
import ItemList from "../../components/ItemList";
import {useState} from "react";

const SearchBySpanishTitle = () => {

    const dispatch = useDispatch();
    const titleMovies = useSelector(state => state.spanishTitleMovies);
    const titleSeries = useSelector(state => state.spanishTitleSeries);
    const titleMoviesLoading = useSelector(state => state.spanishTitleMoviesLoading);

    const [searchTitle, setSearchTitle] = useState('');

    async function searchByTitle() {
        dispatch(getMoviesBySpanishTitle(searchTitle));
        dispatch(getSeriesBySpanishTitle(searchTitle));
    }

    const handleOnChange = (e) => {
        setSearchTitle(e.target.value);
    };

    return (
        <div className="container">
            <h2>Busca por título español</h2>
            <div className="row search-field">
                <div className="col-sm-3">
                    <TextField fullWidth
                               label="Título español"
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
                    <h3>Películas</h3>
                    {titleMoviesLoading ? <LoadingComponent/> : <ItemList items={titleMovies}/>}
                    <h3>Series</h3>
                    {titleMoviesLoading ? <LoadingComponent/> : <ItemList items={titleSeries}/>}
                </div>
            </div>
        </div>
    );
};

export default SearchBySpanishTitle;
