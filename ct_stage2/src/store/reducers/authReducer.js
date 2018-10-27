const initialState = {
    authError: null,
    users: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN_ERROR':
            console.log(
                'Oopps.. it looks like there is a problem on your credentials', 
                action.err)
            return {
                ...state,
                authError: action.err
            }

        case 'SIGNIN_SUCCESSFULL': 
            console.log('Welcome to your account')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_SUCCESSFULL': 
            console.log('Congratulations! You just created your very own account')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('Oopps... it looks like there is something wrong on your registration')
            return {
                ...state,
                authError: action.err
            }

        case 'SINGOUT_SUCCESSFULL': 
            console.log('You\'ve signed out from your account')
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

export default authReducer