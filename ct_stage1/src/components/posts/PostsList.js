import React from 'react'

import PostSummary from './PostSummary'

const PostsList = ({ posts }) => {
    return (
        <div className="posts-list wrapper">
            { posts.length ? (posts.map(post => {
                return <PostSummary post={ post } key={ post.id } />
            })) : (
                <p style={{ textAlign: 'center' }}>Mo posts found</p>
            ) }
        </div>
    )
}

export default PostsList