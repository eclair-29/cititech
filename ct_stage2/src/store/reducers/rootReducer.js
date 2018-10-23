import { combineReducers } from 'redux'

// Reducers to Combine
import authReducer from './authReducer'
import mailsReducer from './mailsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    mails: mailsReducer
})

export default rootReducer