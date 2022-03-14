import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getByOriginalTitle} from "../../store/actions";
import {Button, TextField} from "@mui/material";
import LoadingComponent from "../../components/LoadingComponent";
import MovieList from "../../components/MovieList";

const SearchByOriginalTitle = () => {
    const dispatch = useDispatch();
    const titleMovies = useSelector(state => state.originalTitleMovies);
    const titleMoviesLoading = useSelector(state => state.originalTitleMoviesLoading);

    const [searchTitle, setSearchTitle] = useState('');

    async function searchByTitle() {
        dispatch(getByOriginalTitle(searchTitle));
    }

    const handleOnChange = (e) => {
        setSearchTitle(e.target.value);
    };

    return (
        <div className="container search-by-title">
            <h2>Search by title</h2>
            <div className="row search-field">
                <div className="col-sm-3">
                    <TextField fullWidth
                               label="Movie title ..."
                               type="search"
                               variant="filled"
                               onChange={handleOnChange}
                    />
                </div>
                <div className="col-sm-2">
                    <Button variant="contained"
                            color="primary"
                            onClick={searchByTitle}>Search</Button>
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

export default SearchByOriginalTitle;
