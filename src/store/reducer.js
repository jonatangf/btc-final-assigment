import * as actions from "./actions";

const initialState = {
    top10MoviesLoading: false,
    top10Movies: [],
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
        default:
            return state;
    }
}

export default reducer;
