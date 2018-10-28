const initial_state = {
    authError: null,
    users: []
}

const auth_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'SIGNIN_ERROR':
            console.log('SIGNIN ERROR! it seemes your credentials are not right...')
            return {
                ...state, 
                authError: action.err
            }

        case 'SIGNIN_SUCCESS':
            console.log('SIGNIN SUCCESS! your credentials are logged in...')
            return {
                ...state, 
                authError: null
            }

        case 'SIGNUP_SUCCESS': 
            console.log('Congratulations! You successfully registered your account')
            return {
                ...state,
                authError: null
            }
        
        case 'SIGNUP_ERROR': 
            console.log('Opps... it seems you have an error signing up')
            return {
                ...state,
                authError: action.err
            }

        case 'SIGNOUT_SUCCESS': 
            console.log('YOU ARE SIGNED OUT FROM YOUR ACCOUNT')
            return state

        case 'FETCH_USER_PROFILE':
            console.log(action.payload)
            return {
                ...state,
                users: action.payload
            }

        default: 
            return state
    }
}

export default auth_reducer