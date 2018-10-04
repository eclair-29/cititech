const initial_state = {
    posts: [
        { id: 'xD48o2', author: 'eclair.48', title: 'Squirtle laid an egg', content: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' },
        { id: 'cG28a8', author: 'tinetine.o9', title: 'Pikachu learns a new ability', content: 'ullam et saepe reiciendis' }
    ]
}

const posts_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('POST CREATED: ', action.post)
            return state 
            
        case 'CREATE_POST_ERROR': 
            console.log('ERROR ON POST CREATION: ', action.err)
            return state 

        default: 
            return state
    }
}

export default posts_reducer