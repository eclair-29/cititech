export const create_post = post => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async actions here...
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const uid = getState().firebase.auth.uid
        
        firestore.collection('posts').add({
            ...post,
            author_ID: uid,
            author_username: profile.username,
            posted_at: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post })
        }).catch(err => {
            dispatch({ type: 'CREATE_POST_ERROR', err })
        })
    }
}