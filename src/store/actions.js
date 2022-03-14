import api from "../config/api";

export const GET_TOP_10_MOVIES = 'GET_TOP_10_MOVIES';
export const GET_TOP_10_MOVIES_SUCCESS = 'GET_TOP_10_MOVIES_SUCCESS';
export const GET_TOP_10_MOVIES_ERROR = 'GET_TOP_10_MOVIES_ERROR';
export const GET_TITLE_MOVIES = 'GET_BY_TITLE';
export const GET_TITLE_MOVIES_SUCCESS = 'GET_BY_TITLE_SUCCESS';
export const GET_TITLE_MOVIES_ERROR = 'GET_BY_TITLE_ERROR';

const apiKey = 'ddf5af5309b1e67e890410fccc76406b';

export const getTop10Movies = () => async (dispatch) => {
    api.get('trending/movie/day?api_key=' + apiKey)
        .then(response => {
            console.log(response);
            return dispatch({
                type: GET_TOP_10_MOVIES_SUCCESS,
                payload: response.data.results
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

export const getByTitle = (title) => async (dispatch) => {
    api.get('search/movie?api_key=' + apiKey + '&query=' + title)
        .then(response => {
            console.log(response);
            return dispatch({
                type: GET_TITLE_MOVIES_SUCCESS,
                payload: response.data.results
            })
        })
        .catch(error => {
            console.log(error);
            return dispatch({
                type: GET_TITLE_MOVIES_ERROR,
                payload: error
            })
        });
};
