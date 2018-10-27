// Create Mail
export const composeMail = mail => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const uid = getState().firebase.auth.uid

        firestore.collection('mails')
        .add({
            ...mail,
            authorID: uid,
            authorUsername: profile.username,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'COMPOSE_MAIL',
                payload: mail
            })
        }).catch(err => {
            dispatch({
                type: 'COMPOSE_MAIL_ERROR',
                payload: err
            })
        })
    }
}