let initialState = {
    popularPeople: [],
    loading: true
}

const peopleReducer = (state=initialState, action) => {
    let {type, payload} = action;

    switch(type) {
        case "GET_PEOPLE_REQUEST":
            return {...state, loading: true}
        case "GET_PEOPLE_SUCCESS":
            return {
                ...state,
                popularPeople:payload.popularPeople,
                loading: false,
            };

        case "GET_PEOPLE_FAILURE":
            return {...state, loading: false}

            default:
            return {...state}
    }
}

export default peopleReducer