const initialState = {
    mails: [
        { id: '1', authorUsername: 'eclair.29', recepient: 'tine.o9', subject: 'Seasons Greeetings', content: 'Hello it\'s been a while' },
        { id: '2', authorUsername: 'eclair.29', recepient: 'jan.o1', subject: 'Reply to the Email', content: 'sample description for the mail' },
        { id: '3', authorUsername: 'tine.o9', recepient: 'eclair.29', subject: 'Thank you', content: 'Thank you for the greetings, have a nice day' }
    ]
}

const mailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMPOSE_MAIL': 
            console.log('MAIL IS SENT SUCCESSFULLY: ', action.payload)
            return state

        case 'COMPOSE_MAIL_ERROR':
            console.log('ERROR SENDING MAIL: ', action.payload)
            return state

        default: 
            return state
    }
}

export default mailsReducer