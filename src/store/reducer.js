import * as actions from "./actions";

const initialState = {
    top10Movies: [],
    top10MoviesLoading: false,
    top10Series: [],
    top10SeriesLoading: false,
    spanishTitleMovies: [],
    spanishTitleMoviesLoading: false,
    spanishTitleSeries: [],
    spanishTitleSeriesLoading: false,
    originalTitleMovies: [],
    originalTitleMoviesLoading: false,
    originalTitleSeries: [],
    originalTitleSeriesLoading: false,
};

function reducer(
    state = initialState,
    action
) {
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
        case actions.GET_TOP_10_SERIES:
            return {
                ...state,
                top10SeriesLoading: true,
            };
        case actions.GET_TOP_10_SERIES_SUCCESS:
            console.log("I'm here")
            return {
                ...state,
                top10SeriesLoading: false,
                top10Series: action.payload,
            };
        case actions.GET_TOP_10_SERIES_ERROR:
            return {
                ...state,
                top10SeriesLoading: false,
                top10Series: [],
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
        case actions.GET_SERIES_BY_SPANISH_TITLE:
            return {
                ...state,
                spanishTitleSeriesLoading: true,
            };
        case actions.GET_SERIES_BY_SPANISH_TITLE_SUCCESS:
            return {
                ...state,
                spanishTitleSeriesLoading: false,
                spanishTitleSeries: action.payload,
            };
        case actions.GET_SERIES_BY_SPANISH_TITLE_ERROR:
            return {
                ...state,
                spanishTitleSeriesLoading: false,
                spanishTitleSeries: [],
            };
        case actions.GET_SERIES_BY_ORIGINAL_TITLE:
            return {
                ...state,
                originalTitleSeriesLoading: true,
            };
        case actions.GET_SERIES_BY_ORIGINAL_TITLE_SUCCESS:
            return {
                ...state,
                originalTitleSeriesLoading: false,
                originalTitleSeries: action.payload,
            };
        case actions.GET_SERIES_BY_ORIGINAL_TITLE_ERROR:
            return {
                ...state,
                originalTitleSeriesLoading: false,
                originalTitleSeries: [],
            };
        default:
            return state;
    }
}

export default reducer;
