export const composeMail = mail => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()

        firestore.collection('mails')
        .add({
            ...mail,
            authorID: '12345',
            authorUsername: 'eclair.29',
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