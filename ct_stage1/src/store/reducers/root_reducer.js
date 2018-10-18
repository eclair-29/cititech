import { combineReducers } from 'redux'

// redux reducers
import auth_reducer from './auth_reducer'
import posts_reducer from './posts_reducer'

// Firebase reducers
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const root_reducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: auth_reducer,
    posts: posts_reducer,
})

export default root_reducer