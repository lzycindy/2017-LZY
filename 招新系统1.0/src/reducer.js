//合成所有reducer 并返回reducers
import { combineReducers } from 'redux'
import { user }from './redux/user.redux'


export default combineReducers({user})


