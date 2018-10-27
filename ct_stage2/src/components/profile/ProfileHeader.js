import React from 'react'
import { Link } from 'react-router-dom'

const ProfileHeader = ({ profile, user, match }) => {
    const username = match.params.username

    return (
        <div className="profile-header">
            {/* User */}
            { profile.username === username ? (
                <div className="user">
                    <h4 className="name">
                        { profile.name }
                    </h4>
                    <span className="username">
                        { profile.username }
                    </span>
                </div>
            ) : (
                user && 
                <div className="user">
                    <h4 className="name">
                        { user.name }
                    </h4>
                    <span className="username">
                        { user.username }
                    </span>
                </div>
            ) }

            {/* Edit Link */}
            <Link className="edit-profile-link" to="/">
                Edit Profile
            </Link>
        </div>
    )
}

export default ProfileHeader