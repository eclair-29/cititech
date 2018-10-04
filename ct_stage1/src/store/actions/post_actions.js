export const create_post = post => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async actions here...
        const firestore = getFirestore()
        firestore.collection('posts').add({
            ...post,
            author_ID: 12345,
            author_username: 'tinetine.o9',
            posted_at: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post })
        }).catch(err => {
            dispatch({ type: 'CREATE_POST_ERROR', err })
        })
    }
}