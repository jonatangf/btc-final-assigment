import api from "../config/api";

export const GET_TOP_10_MOVIES = 'GET_TOP_10_MOVIES';
export const GET_TOP_10_MOVIES_SUCCESS = 'GET_TOP_10_MOVIES_SUCCESS';
export const GET_TOP_10_MOVIES_ERROR = 'GET_TOP_10_MOVIES_ERROR';
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

export const getByOriginalTitle = (title) => async (dispatch) => {
    return dispatch(getByTitle(title, 'en-US', GET_MOVIES_BY_ORIGINAL_TITLE_SUCCESS,
        GET_MOVIES_BY_ORIGINAL_TITLE_ERROR));
};

export const getBySpanishTitle = (title) => async (dispatch) => {
    return dispatch(getByTitle(title, 'es-ES', GET_MOVIES_BY_SPANISH_TITLE_SUCCESS,
        GET_MOVIES_BY_SPANISH_TITLE_ERROR));
};

const getByTitle = (title, language, successAction, errorAction) => async (dispatch) => {
    api.get('search/movie?api_key=' + apiKey + '&query=' + title + "&language=" + language)
        .then(response => {
            console.log(response);
            return dispatch({
                type: successAction,
                payload: response.data.results
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
