import {Button, TextField} from "@mui/material";
import {getBySpanishTitle} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import LoadingComponent from "../../components/LoadingComponent";
import MovieList from "../../components/MovieList";
import {useState} from "react";

const SearchBySpanishTitle = () => {

    const dispatch = useDispatch();
    const titleMovies = useSelector(state => state.spanishTitleMovies);
    const titleMoviesLoading = useSelector(state => state.spanishTitleMoviesLoading);

    const [searchTitle, setSearchTitle] = useState('');

    async function searchByTitle() {
        dispatch(getBySpanishTitle(searchTitle));
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
                    {titleMoviesLoading ? <LoadingComponent/> : <MovieList movies={titleMovies}/>}
                </div>
            </div>
        </div>
    );
};

export default SearchBySpanishTitle;
