// Create Post
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

// Get User Posts
export const get_user_posts = user => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()

        firestore.collection('posts')
        .where('author_username', '==', user)
        .get()
        .then(snapshot => {
            const data = snapshot.docs.map(doc => doc.data())
            dispatch({ type: 'GET_USER_POSTS', payload: data })
        })
        .catch(err => {
            dispatch({ type: 'GET_USER_POSTS_ERROR', err })
        })
    }
}