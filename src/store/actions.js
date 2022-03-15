import api from "../config/api";

export const GET_TOP_10_MOVIES = 'GET_TOP_10_MOVIES';
export const GET_TOP_10_MOVIES_SUCCESS = 'GET_TOP_10_MOVIES_SUCCESS';
export const GET_TOP_10_MOVIES_ERROR = 'GET_TOP_10_MOVIES_ERROR';
export const GET_TOP_10_SERIES = 'GET_TOP_10_SERIES';
export const GET_TOP_10_SERIES_SUCCESS = 'GET_TOP_10_SERIES_SUCCESS';
export const GET_TOP_10_SERIES_ERROR = 'GET_TOP_10_SERIES_ERROR';
export const GET_MOVIES_BY_ORIGINAL_TITLE = 'GET_MOVIES_BY_ORIGINAL_TITLE';
export const GET_MOVIES_BY_ORIGINAL_TITLE_SUCCESS = 'GET_MOVIES_BY_ORIGINAL_TITLE_SUCCESS';
export const GET_MOVIES_BY_ORIGINAL_TITLE_ERROR = 'GET_MOVIES_BY_ORIGINAL_TITLE_ERROR';
export const GET_MOVIES_BY_SPANISH_TITLE = 'GET_MOVIES_BY_SPANISH_TITLE';
export const GET_MOVIES_BY_SPANISH_TITLE_SUCCESS = 'GET_MOVIES_BY_SPANISH_TITLE_SUCCESS';
export const GET_MOVIES_BY_SPANISH_TITLE_ERROR = 'GET_MOVIES_BY_SPANISH_TITLE_ERROR';

const apiKey = 'ddf5af5309b1e67e890410fccc76406b';

export const getTop10Movies = () => async (dispatch) => {
    api.get('trending/movie/day?api_key=' + apiKey)
        .then(response => {
            console.log(response);
            return dispatch({
                type: GET_TOP_10_MOVIES_SUCCESS,
                payload: response.data.results.slice(0, 10)
            })
        })
        .catch(error => {
            console.log(error);
            return dispatch({
                type: GET_TOP_10_MOVIES_ERROR,
                payload: error
            })
        });
};

export const getTop10Series = () => async (dispatch) => {
    api.get('trending/tv/day?api_key=' + apiKey)
        .then(response => {
            console.log(response);
            return dispatch({
                type: GET_TOP_10_SERIES_SUCCESS,
                payload: response.data.results.slice(0, 10)
            })
        })
        .catch(error => {
            console.log(error);
            return dispatch({
                type: GET_TOP_10_SERIES_ERROR,
                payload: error
            })
        });
}

export const getMoviesByOriginalTitle = (title) => async (dispatch) => {
    return dispatch(getMoviesByTitle(title, 'en-US', GET_MOVIES_BY_ORIGINAL_TITLE_SUCCESS,
        GET_MOVIES_BY_ORIGINAL_TITLE_ERROR));
};

export const getMoviesBySpanishTitle = (title) => async (dispatch) => {
    return dispatch(getMoviesByTitle(title, 'es-ES', GET_MOVIES_BY_SPANISH_TITLE_SUCCESS,
        GET_MOVIES_BY_SPANISH_TITLE_ERROR));
};

const getMoviesByTitle = (title, language, successAction, errorAction) => async (dispatch) => {
    api.get('search/movie?api_key=' + apiKey + '&query=' + title + "&language=" + language)
        .then(response => {
            console.log(response);
            return dispatch({
                type: successAction,
                payload: response.data.results.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
            })
        })
        .catch(error => {
            console.log(error);
            return dispatch({
                type: errorAction,
                payload: error
            })
        });
}
