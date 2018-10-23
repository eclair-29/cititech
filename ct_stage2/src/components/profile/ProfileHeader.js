import React from 'react'
import { Link } from 'react-router-dom'

const ProfileHeader = () => {
    return (
        <div className="profile-header">
            {/* User */}
            <div className="user">
                <h4 className="name">Miguel De Chavez</h4>
                <span className="username">eclair.29</span>
            </div>

            {/* Edit Link */}
            <Link className="edit-profile-link" to="/">
                Edit Profile
            </Link>
        </div>
    )
}

export default ProfileHeader