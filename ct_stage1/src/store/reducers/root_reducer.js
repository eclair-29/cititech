import { combineReducers } from 'redux'

import auth_reducer from './auth_reducer'
import posts_reducer from './posts_reducer'

const root_reducer = combineReducers({
    auth: auth_reducer,
    posts: posts_reducer
})

export default root_reducer