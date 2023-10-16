let initialState = {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    genreList: [],
    loading: true
}
/* 액션에서 만들어놓은 저장소 한 번 초기화 */

const movieReducer = (state=initialState, action) => {
    let {type, payload} = action;

    switch(type) {
        case "GET_MOVIES_REQUEST":
            return {...state, loading: true}
        case "GET_MOVIES_SUCCESS":
            return {
                ...state,
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upcomingMovies: payload.upcomingMovies,
                genreList: payload.genreList,
                loading: false,
            };

        case "GET_MOVIES_FAILURE":
            return {...state, loading: false}
            
            default:
            return {...state}
    }
}

export default movieReducer
