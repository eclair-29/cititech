import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

// Firebase
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import __firebase_config from './configs/__firebase_config'

// Store
const store = createStore(
    rootReducer,
    // Store Enhancers
    compose(
        applyMiddleware(thunk.withExtraArgument({
            getFirebase,
            getFirestore
        })),
        reduxFirestore(__firebase_config),
        reactReduxFirebase(__firebase_config, {
            attachAuthIsReady: true,
            useFirestoreForProfile: true,
            userProfile: 'users'
        })
    )
);

// Render App
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={ store }>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
})

