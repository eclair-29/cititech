import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux 
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import root_reducer from './store/reducers/root_reducer'

// Firebase and Firestore
import fb_config from './configs/fb_config'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'


const store = createStore(root_reducer, 
    // with compose method, we can apply multiple store enhancers...
    compose(
        // store ehnhancers
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fb_config),
        reactReduxFirebase(fb_config, {
            useFirestoreForProfile: true,
            userProfile: 'users', 
            attachAuthIsReady: true 
        }) 
    )
)

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={ store }>
            <App />
        </Provider>,  
        document.getElementById('root')
    );
    registerServiceWorker();
})
