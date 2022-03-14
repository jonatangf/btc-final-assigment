import * as actions from "./actions";

const initialState = {
    top10MoviesLoading: false,
    top10Movies: [],
    titleMovies: [],
    titleMoviesLoading: false,
};

function reducer(
    state = initialState,
    action
) {
    console.log("reducer", action);
    switch (action.type) {
        case actions.GET_TOP_10_MOVIES:
            return {
                ...state,
                top10MoviesLoading: true,
            };
        case actions.GET_TOP_10_MOVIES_SUCCESS:
            return {
                ...state,
                top10MoviesLoading: false,
                top10Movies: action.payload,
            };
        case actions.GET_TOP_10_MOVIES_ERROR:
            return {
                ...state,
                top10MoviesLoading: false,
                top10Movies: [],
            };
        case actions.GET_TITLE_MOVIES:
            return {
                ...state,
                titleMoviesLoading: true,
            };
        case actions.GET_TITLE_MOVIES_SUCCESS:
            return {
                ...state,
                titleMoviesLoading: false,
                titleMovies: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
