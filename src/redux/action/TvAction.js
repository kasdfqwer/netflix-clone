import api from '../api'

const API_KEY = process.env.REACT_APP_API_KEY
function getTv() {
    return async( dispatch ) => {
        try {
            dispatch({type:"GET_TV_REQUSET"});

            const onTheAirTvApi = api.get(`/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`);
            const popularTvApi = api.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const topRatedTvApi = api.get(`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

            const genreTvApi = api.get(`/genre/tv/list?api_key=${API_KEY}&language=en-US`)

            let [onTheAirTv, popularTv, topRatedTv, genreTvList] = await Promise.all([
                onTheAirTvApi,
                popularTvApi,
                topRatedTvApi,
                genreTvApi
            ]);

            dispatch({
                type: "GET_TV_SUCCESS",
                payload: {
                    onTheAirTv: onTheAirTv.data,
                    popularTv: popularTv.data,
                    topRatedTv: topRatedTv.data,
                    genreTvList: genreTvList.data.genres
                }
            })
            /* console.log(onTheAirTv)
            console.log(popularTv)
            console.log(topRatedTv) */
        } catch(error) {
            dispatch({type: "GET_TV_FAILURE"})
        }
    }
}
export const TvAction = {
    getTv,
}