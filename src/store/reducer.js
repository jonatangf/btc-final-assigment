import * as actions from "./actions";

const initialState = {
    top10Movies: [],
    top10MoviesLoading: false,
    spanishTitleMovies: [],
    spanishTitleMoviesLoading: false,
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
        case actions.GET_MOVIES_BY_SPANISH_TITLE:
            return {
                ...state,
                spanishTitleMoviesLoading: true,
            };
        case actions.GET_MOVIES_BY_SPANISH_TITLE_SUCCESS:
            return {
                ...state,
                spanishTitleMoviesLoading: false,
                spanishTitleMovies: action.payload,
            };
        case actions.GET_MOVIES_BY_SPANISH_TITLE_ERROR:
            return {
                ...state,
                spanishTitleMoviesLoading: false,
                spanishTitleMovies: [],
            };
        case actions.GET_MOVIES_BY_ORIGINAL_TITLE:
            return {
                ...state,
                originalTitleMoviesLoading: true,
            };
        case actions.GET_MOVIES_BY_ORIGINAL_TITLE_SUCCESS:
            return {
                ...state,
                originalTitleMoviesLoading: false,
                originalTitleMovies: action.payload,
            };
        case actions.GET_MOVIES_BY_ORIGINAL_TITLE_ERROR:
            return {
                ...state,
                originalTitleMoviesLoading: false,
                originalTitleMovies: [],
            };
        default:
            return state;
    }
}

export default reducer;
