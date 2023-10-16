import api from '../api';

const API_KEY = process.env.REACT_APP_API_KEY
function getPeople() {
    return async( dispatch ) => {
        try {
            dispatch({type:"GET_PEOPLE_REQUEST"})

            const popularPeopleApi = api.get(`person/popular?api_key=${API_KEY}&language=en-US&page=1`)

            let [popularPeople] = await Promise.all([
                popularPeopleApi
            ]);
            /* console.log("people", popularPeople) */

            dispatch({
                type: "GET_PEOPLE_SUCCESS",
                payload: {
                    popularPeople: popularPeople.data,
                }
            })
            /* console.log(popularPeople) */
        } catch(error) {
            dispatch({type: "GET_PEOPLE_FAILURE"})
        }
    } 
}

export const popularAction = {
    getPeople,
}