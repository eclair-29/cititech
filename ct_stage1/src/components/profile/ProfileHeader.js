import React from 'react'

const ProfileHeader = ({ profile, posts }) => {
    return (
        <div className="profile-header">
            <div className="user">
                <h4>{ profile.name }</h4>
                <span>{ profile.username }</span>
            </div>
            <span className="posts-length">
                { posts.length ? `${posts.length} posts found` : `No posts found` }
            </span>
        </div>
    )
}

export default ProfileHeader