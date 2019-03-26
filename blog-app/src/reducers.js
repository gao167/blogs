import {combineReducers} from 'redux'
import blogReducer from './modules/blog/reducer'

export default combineReducers({
    blog: blogReducer,
})