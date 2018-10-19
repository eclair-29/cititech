const initial_state = {
    posts: []
}

const posts_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('POST CREATED: ', action.post)
            return state 
            
        case 'CREATE_POST_ERROR': 
            console.log('ERROR ON POST CREATION: ', action.err)
            return state 

        case 'GET_USER_POSTS': 
            console.log('USER POSTS: ', action.payload)
            return {
                ...state,
                posts: action.payload
            }

        case 'GET_USER_POSTS_ERROR': 
            console.log('ERROR GETTING USER POSTS: ', action.err)
            return state 

        default: 
            return state
    }
}

export default posts_reducer