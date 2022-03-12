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
        default:
            return state;
    }
}

export default reducer;
