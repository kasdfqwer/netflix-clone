let initialState = {
    trendingMovie: [],
    trendingTv: [],
    loading: true
}

const trendingReducer = (state=initialState, action) => {
    let {type, payload} = action;

    switch(type) {
        case "GET_TRENDING_REQUEST":
            return {...state, loading: true}
        case "GET_TRENDING_SUCCESS":
            return {
                ...state,
                trendingMovie: payload.trendingMovie,
                trendingTv: payload.trendingTv,
                loading: false,
            };

        case "GET_TRENDING_FAILURE":
            return {...state, loading: false}

            default:
            return {...state}
    }
}

export default trendingReducer