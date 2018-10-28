// Sign In User
export const signin = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'SIGNIN_SUCCESS', credentials })
        }).catch(err => {
            dispatch({ type: 'SIGNIN_ERROR', err: err.message })
        })
    }
}

// Sign Up User
export const signup = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                name: newUser.firstName + " " + newUser.lastName,
                username: newUser.username
            })
        }).then(() => {
            dispatch({  type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({  type: 'SIGNUP_ERROR', err: err.message })
        })
    }
}

// Sign Out User
export const  signout = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}

// Fetch User's Profile
export const fetctUserProfile = username => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()

        firestore.collection('users')
        .where('username', '==', username)
        .get()
        .then(snapshot => {
            const data = snapshot.docs.map(doc => doc.data())
            dispatch({
                type: 'FETCH_USER_PROFILE',
                payload: data
            })
        })
    }
}