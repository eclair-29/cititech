// Sign In User
export const signin = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password 
        )
        .then(() => dispatch({ type: 'SIGNIN_SUCCESSFULL' }))
        .catch(err => {
            dispatch({
                type: 'SIGNIN_ERROR',
                err: err.message
            })
        })
    }
}

// Sign Up New User
export const signup = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase  = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then(res => {
            return firestore.collection('users')
            .doc(res.user.uid)
            .set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                name: `${newUser.firstName} ${newUser.lastName}`,
                username: newUser.username
            })
        })
        .then(() => dispatch({ type: 'SIGNUP_SUCCESSFULL' }))
        .catch(err => {
            dispatch({
                type: 'SIGNUP_ERROR',
                err: err.message
            })
        })
    }
}


// Sign Out
export const signout = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
        .then(() => dispatch({ type: 'SINGOUT_SUCCESSFULL' }))
    }
}