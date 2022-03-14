import {Button, TextField} from "@mui/material";
import {getByTitle} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import LoadingComponent from "../../components/LoadingComponent";
import MovieList from "../../components/MovieList";
import {useState} from "react";

const SearchByTitle = () => {

    const dispatch = useDispatch();
    const titleMovies = useSelector(state => state.titleMovies);
    const titleMoviesLoading = useSelector(state => state.titleMoviesLoading);

    const [searchTitle, setSearchTitle] = useState('');

    async function searchByTitle() {
        dispatch(getByTitle(searchTitle));
    }

    const handleOnChange = (e) => {
        setSearchTitle(e.target.value);
    };

    return (
        <div className="container search-by-title">
            <h2>Search by title</h2>
            <div className="row">
                <div className="col-sm-3">
                    <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                    />
                </div>
                <div className="col-sm-2">
                    <Button variant="contained"
                            color="primary"
                            onClick={searchByTitle}
                            onChange={handleOnChange}
                            value={searchTitle}
                    >Search</Button>
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

export default SearchByTitle;
