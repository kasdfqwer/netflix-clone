import api from '../api'

const API_KEY = process.env.REACT_APP_API_KEY
function getTrending() {
    return async( dispatch ) => {
        try {
            dispatch({type:"GET_TRENDING_REQUEST"});

            const trendingMovieApi = api.get(`/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`);
            const trendingTvApi = api.get(`/trending/tv/day?api_key=${API_KEY}&language=en-US&page=1`);

            let [trendingMovie, trendingTv] = await Promise.all([
                trendingMovieApi,
                trendingTvApi
            ]);

            /* console.log("trending", trendingMovie) */

            dispatch({
                type: "GET_TRENDING_SUCCESS",
                payload: {
                    trendingMovie: trendingMovie.data,
                    trendingTv: trendingTv.data
                }
            })
        } catch(error) {
            dispatch({type: "GET_TRENDING_FAILURE"})
        }
    }
}

export const TrendingAction = {
    getTrending,
}