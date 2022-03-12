export const GET_TOP_10_MOVIES = 'GET_TOP_10_MOVIES';

export const getTop10Movies = () => async (dispatch) => {
    const response = await fetch('/api/movies/top10');
    const movies = await response.json();
    dispatch({
        type: GET_TOP_10_MOVIES,
        payload: movies,
    });
};
