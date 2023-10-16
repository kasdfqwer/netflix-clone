import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import peopleReducer from './peopleReducer'
import trendingReducer from './trendingReducer'
import tvReducer from './tvReducer'

export default combineReducers({
    movie: movieReducer,
    people: peopleReducer,
    trending: trendingReducer,
    tv: tvReducer
})
/* moive 키 moviereducer 값, 객체 형태로 전달 */