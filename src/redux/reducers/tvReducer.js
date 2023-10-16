let initialState = {
    onTheAirTv: [],
    popularTv: [],
    topRatedTv: [],
    genreTvList: [],
    loading: true
}

const tvReducer = (state=initialState, action) => {
    let {type, payload} = action
    switch(type) {
        case "GET_TV_REQUEST":
            return {...state, loading: true}
        case "GET_TV_SUCCESS":
            return {
                ...state,
                onTheAirTv: payload.onTheAirTv,
                popularTv: payload.popularTv,
                topRatedTv: payload.topRatedTv,
                genreTvList: payload.genreTvList,
                loading: false,
            };

        case "GET_TV_FAILURE":
            return {...state, loading: false}

            default:
            return {...state}
    }
}

export default tvReducer