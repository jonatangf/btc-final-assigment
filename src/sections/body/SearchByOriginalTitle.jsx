import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getMoviesByOriginalTitle} from "../../store/actions";
import {Button, TextField} from "@mui/material";
import LoadingComponent from "../../components/LoadingComponent";
import ItemList from "../../components/ItemList";

const SearchByOriginalTitle = () => {
    const dispatch = useDispatch();
    const titleMovies = useSelector(state => state.originalTitleMovies);
    const titleMoviesLoading = useSelector(state => state.originalTitleMoviesLoading);

    const [searchTitle, setSearchTitle] = useState('');

    async function searchByTitle() {
        dispatch(getMoviesByOriginalTitle(searchTitle));
    }

    const handleOnChange = (e) => {
        setSearchTitle(e.target.value);
    };

    return (
        <div className="container">
            <h2>Busca por título original</h2>
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
                    {titleMoviesLoading ? <LoadingComponent/> : <ItemList movies={titleMovies}/>}
                </div>
            </div>
        </div>
    );
};

export default SearchByOriginalTitle;
