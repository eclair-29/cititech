import { combineReducers } from 'redux'

// Reducers to Combine
import authReducer from './authReducer'
import mailsReducer from './mailsReducer'

// Firebase & Firestore Reducers
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    mails: mailsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer